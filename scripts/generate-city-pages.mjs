// Post-build: generate static SEO HTML for each /rent-a-car/:city route.
// Reads dist/public/index.html, swaps SEO tags + JSON-LD, writes one
// directory per city: dist/public/rent-a-car/<slug>/index.html
//
// .htaccess already prefers existing files/dirs over the SPA fallback,
// so /rent-a-car/podgorica is served from this static HTML when it exists,
// then the SPA hydrates on top with full client-side functionality.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cities } from "./cities-seo.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist", "public");
const TEMPLATE = path.join(DIST, "index.html");

const SITE_URL = "https://rentakar.me";

function escape(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildLocalBusinessJsonLd(city) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: `Rent a Car ${city.name} | rentakar.me`,
    description: city.desc,
    url: `${SITE_URL}/rent-a-car/${city.slug}`,
    telephone: "+38268062259",
    email: "info@rentakar.me",
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: `€${city.priceFrom}-€${city.priceFrom * 4}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressCountry: "ME",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  };
}

function buildBreadcrumbJsonLd(city) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Rent a Car", item: `${SITE_URL}/rent-a-car-montenegro` },
      { "@type": "ListItem", position: 3, name: city.name, item: `${SITE_URL}/rent-a-car/${city.slug}` },
    ],
  };
}

function buildNoscriptHtml(city) {
  return `<div style="max-width:800px;margin:40px auto;padding:20px;font-family:Arial,sans-serif;">
        <h1>${escape(city.h1)}</h1>
        <p>${escape(city.desc)}</p>
        <p>WhatsApp: <strong>+382 68 062 259</strong> &middot; Email: <strong>info@rentakar.me</strong></p>
        <p>Cijene od <strong>€${city.priceFrom}/dan</strong>. Odgovaramo u roku od 2 sata.</p>
        <p>Da biste vidjeli kompletan sajt, omogućite JavaScript u svom browseru.</p>
      </div>`;
}

function rewriteAssetPaths(html) {
  // index.html references assets with absolute paths like /assets/foo.js.
  // Those work the same from a subdirectory, so no rewriting needed.
  return html;
}

function transformTemplate(template, city) {
  const url = `${SITE_URL}/rent-a-car/${city.slug}`;
  const title = escape(city.title);
  const desc = escape(city.desc);

  let out = template;

  // <title>
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

  // meta description
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${desc}" />`,
  );

  // og:title / og:description / og:url
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${desc}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`,
  );

  // twitter cards
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${desc}" />`,
  );

  // canonical
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  );

  // hreflang: same URL for every language version (the SPA reads the user's
  // language preference from localStorage; the static HTML is identical for
  // crawlers regardless of language code).
  out = out.replace(
    /(<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href=)"[^"]*"\s*\/?>/g,
    `$1"${url}" />`,
  );

  // Inject city-specific JSON-LD + noscript content right before </head>
  const cityJsonLd = `
    <script type="application/ld+json">${JSON.stringify(buildLocalBusinessJsonLd(city))}</script>
    <script type="application/ld+json">${JSON.stringify(buildBreadcrumbJsonLd(city))}</script>
  `;
  out = out.replace(/<\/head>/, `${cityJsonLd}\n  </head>`);

  // Replace noscript fallback with city-specific copy.
  out = out.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript>\n      ${buildNoscriptHtml(city)}\n      </noscript>`,
  );

  return rewriteAssetPaths(out);
}

async function main() {
  if (!existsSync(TEMPLATE)) {
    console.error(`[generate-city-pages] missing build artifact: ${TEMPLATE}`);
    console.error(`[generate-city-pages] run "vite build" first.`);
    process.exit(1);
  }

  const template = await readFile(TEMPLATE, "utf8");

  for (const city of cities) {
    const dir = path.join(DIST, "rent-a-car", city.slug);
    await mkdir(dir, { recursive: true });
    const html = transformTemplate(template, city);
    await writeFile(path.join(dir, "index.html"), html, "utf8");
  }

  console.log(`[generate-city-pages] wrote ${cities.length} static city pages to dist/public/rent-a-car/<slug>/index.html`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
