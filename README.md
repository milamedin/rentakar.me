# rentakar.me

Posrednička platforma za rent-a-car i ture u Crnoj Gori. Spaja klijente sa 10+ lokalnih agencija. Prihod ide kroz proviziju.

## Tehnologije

- **React 19** + TypeScript + Vite 7
- **TailwindCSS** v4 (preko `@tailwindcss/vite` plugina)
- **Wouter** v3 za routing (lakša alternativa React Router-u)
- **Framer Motion** za animacije
- **Radix UI** komponente
- **Google Sheets** integracija preko Apps Script-a (forme šalju upite direktno u tab)
- **Statički site** (SPA + Apache `.htaccess` ili Cloudflare-Pages SPA fallback)
- 7 jezika: ME, EN, DE, FR, PL, TR, RU

## Lokalni development

```bash
npm install        # instalira pakete (~1 min)
npm run dev        # vite dev server na http://localhost:3000
npm run check      # TypeScript provjera
npm run build      # production build (output u dist/public/)
```

## Build pipeline

`npm run build` radi 2 stvari:

1. `vite build` — kompajlira React app u `dist/public/`
2. `node scripts/generate-city-pages.mjs` — generiše statičke SEO HTML fajlove za 16 gradova u `dist/public/rent-a-car/<slug>/index.html`

Output u `dist/public/` je **kompletan static site** spreman za upload na bilo koji static hosting (Cloudflare Pages, Netlify, Hostinger, Vercel...).

## Deploy

Vidi [CLOUDFLARE-DEPLOY.md](./CLOUDFLARE-DEPLOY.md) za step-by-step Cloudflare Pages deploy.

## Struktura

```
rentakar.me/
├── client/
│   ├── public/                    Static assets
│   │   ├── images/locations/      Photos for cities + tours (Wikimedia)
│   │   ├── images/services/       Photos for rental categories
│   │   ├── .htaccess              SPA fallback for Apache
│   │   ├── sitemap.xml
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/            React components
│   │   ├── pages/                 Page components (Home, BlogPost, LocationPage, TourPage…)
│   │   ├── data/
│   │   │   ├── blogPosts.ts       16 blog posts (ME/EN)
│   │   │   └── tours.ts           8 tours (ME/EN)
│   │   ├── contexts/
│   │   │   └── LanguageContext.tsx   All 7-language UI strings
│   │   └── lib/
│   │       └── googleSheets.ts    Form submission to Apps Script webhook
│   └── index.html                 HTML template + SEO meta tags
├── scripts/
│   ├── cities-seo.mjs             SEO data for 16 city static pages
│   └── generate-city-pages.mjs    Post-build static HTML generator
├── APPS-SCRIPT-NEW.gs             Google Apps Script (deploy as Web App)
├── APPS-SCRIPT-DEPLOYMENT.md      How to deploy Apps Script
├── CLOUDFLARE-DEPLOY.md           How to deploy site to Cloudflare Pages
└── package.json
```

## Konfiguracija

### Telefon / WhatsApp broj

Da promijeniš broj na koji forme šalju upite, traži ova mjesta:

```bash
grep -rn "38268062259\|68 062 259" client/ scripts/
```

Trenutno: **+382 68 062 259** (privremeno do dolaska novog broja).

### Google Sheets webhook

URL Apps Script-a se nalazi u `client/src/lib/googleSheets.ts`. Ako se URL promijeni (zbog re-deploy-a Apps Script-a kao novog deployment-a umjesto verzije), ažuriraj ga tu.

### Dodavanje novog grada

1. Dodaj entry u `scripts/cities-seo.mjs` (slug, GPS, title, desc)
2. Dodaj entry u `client/src/components/LocationsSection.tsx` (`locationsList`)
3. Dodaj entry u `client/src/pages/LocationPage.tsx` (`locationSEOData`)
4. Dodaj fotografiju u `client/public/images/locations/<slug>.jpg`
5. Dodaj URL u `client/public/sitemap.xml`
6. `npm run build`

## Kontakt

- WhatsApp: +382 68 062 259
- Email: info@rentakar.me / milamedin@gmail.com
