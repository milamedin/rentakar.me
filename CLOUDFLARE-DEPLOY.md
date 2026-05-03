# Cloudflare Pages Deploy — Step-by-step

Ovaj sajt se hostuje na **Cloudflare Pages** (besplatno, neograničen saobraćaj). Deploy je automatizovan: kad push-uješ u Git, Cloudflare ga sam buildaju i objavi za 1-2 minuta.

## Šta ti treba

1. **GitHub nalog** (besplatan, https://github.com/signup)
2. **Cloudflare nalog** (besplatan, https://dash.cloudflare.com/sign-up)
3. **Domen `rentakar.me`** registrovan negdje (već imaš, na Hostinger-u verovatno)

## Korak 1 — Push koda na GitHub

### 1a. Napravi novi repo na GitHub-u

1. Idi na https://github.com/new
2. Repository name: **`rentakar.me`** (ili kako želiš)
3. Visibility: **Private** (preporučeno — kod ostaje samo tvoj)
4. **Ne** označavaj "Add README", "Add .gitignore", "Add license" — već imaš sve
5. Klikni **Create repository**
6. GitHub će ti prikazati URL — kopiraj ga (npr. `https://github.com/milamedin/rentakar.me.git`)

### 1b. Poveži lokalni repo sa GitHub-om

U terminalu, iz foldera `rentakar.me`:

```bash
git remote add origin https://github.com/<TVOJ-USERNAME>/rentakar.me.git
git branch -M main
git push -u origin main
```

GitHub će tražiti tvoj username i password (ili Personal Access Token — ako Git pita za PAT umjesto password-a, idi na https://github.com/settings/tokens i napravi novi token sa `repo` scope-om, pa ga koristi kao password).

Posle push-a, idi nazad na GitHub i vidi da su svi fajlovi tu.

## Korak 2 — Poveži Cloudflare Pages

1. Loguj se na https://dash.cloudflare.com/
2. Lijevo meni → **Workers & Pages**
3. **Create application** → tab **Pages** → **Connect to Git**
4. Authorize Cloudflare na GitHub-u (otvori se popup → klik **Authorize Cloudflare Pages**)
5. Izaberi repo **`rentakar.me`** iz liste → **Begin setup**
6. Project name: **`rentakar`** (Cloudflare će predložiti — ostavi ili promijeni)
7. Production branch: **`main`**
8. **Build settings:**
   - **Framework preset:** None (ili "Vite" ako se pojavi u listi)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/public`
   - **Root directory:** `/` (ostavi prazno)
9. **Environment variables:** ništa (sajt nema secrets — Apps Script URL je javno hardkodovan u `googleSheets.ts`)
10. Klikni **Save and Deploy**

Build će krenuti — pratiš ga u Real-time Logs. Traje ~2-3 min.

Kad završi, dobićeš **rentakar.pages.dev** URL — to je privremena adresa. Otvori je da provjeriš da sve radi.

## Korak 3 — Poveži tvoj domen `rentakar.me`

### 3a. Dodaj custom domen u Cloudflare

1. U Cloudflare projektu (Workers & Pages → tvoj projekat) klikni tab **Custom domains**
2. **Set up a custom domain** → unesi `rentakar.me` → **Continue**
3. Cloudflare će ti reći šta treba uraditi:
   - **Ako je domen već u Cloudflare-u** (ti si dodala domen na Cloudflare prije): klik **Activate domain** i to je to. CNAME se postavlja automatski.
   - **Ako domen NIJE u Cloudflare-u** (još uvijek je na Hostinger DNS-u): moraš da migriraš nameservere. Vidi 3b.

### 3b. (Ako je domen na Hostinger-u) — migracija nameservera

Ovaj korak premiješta DNS upravljanje sa Hostinger-a na Cloudflare. **Sajt nastavlja da radi normalno**, samo Cloudflare upravlja DNS-om.

1. U Cloudflare-u: **Add a site** → unesi `rentakar.me` → izaberi **Free plan** → **Continue**
2. Cloudflare će automatski importovati postojeće DNS zapise. Provjeri ih.
3. Cloudflare će ti dati **2 nameservere**, npr:
   ```
   anna.ns.cloudflare.com
   carl.ns.cloudflare.com
   ```
4. **Idi na Hostinger** → Domains → rentakar.me → **Change Nameservers** → unesi te 2 nameservere → Save.
5. **Sačekaj 1-24h** dok se promjena ne propagira (obično 30 min – 4h).
6. Cloudflare će ti poslati email kad se domen aktivira na njihovim nameserverima.
7. **Vrati se na Pages projekat → Custom domains → Activate domain**.

### 3c. Dodaj i `www.rentakar.me`

1. **Custom domains** → **Set up a custom domain** → `www.rentakar.me` → Continue
2. Cloudflare automatski napravi redirect `www → root`.

## Korak 4 — SPA fallback za Cloudflare Pages

Trenutno koristiš `.htaccess` za Apache (Hostinger). Cloudflare Pages **ne čita .htaccess** — koristi `_redirects` fajl umjesto toga.

Ovo je već urađeno: build izlaz već uključuje `.htaccess` (kompatibilno sa Hostinger-om), ali za Cloudflare ti treba `_redirects`. Da dodaš:

```bash
# Iz foldera rentakar.me:
echo "/*    /index.html   200" > client/public/_redirects
```

Ovo govori Cloudflare-u: "ako URL ne poklopi nijedan fajl, serviraj `index.html` (SPA fallback)". Statički gradski HTML fajlovi i dalje rade jer Cloudflare prvo provjeri fajl, pa onda fallback.

Posle dodavanja `_redirects`:

```bash
git add client/public/_redirects
git commit -m "Add SPA fallback for Cloudflare Pages"
git push
```

Cloudflare će automatski rebuild-ovati za 1-2 min.

## Šta poslije

### Svaka promjena na sajtu

```bash
git add .
git commit -m "Update <šta si mijenjala>"
git push
```

Cloudflare automatski deployuje. Vrijeme: ~2-3 min od push-a do live-a.

### Preview deploys

Svaki push u branch koji nije `main` dobija **preview URL** (npr. `feature-branch.rentakar.pages.dev`). Tako možeš testirati izmjene prije nego što ih push-uješ na main.

### Ako nešto pukne

- Cloudflare Pages → tvoj projekat → **Deployments** → vidi se lista svih buildova
- Klikni stari deployment → **Rollback to this deployment** ako trenutni ima problem
- Build logs ti pokažu tačnu grešku ako build padne

### DNS / Email

Ako koristiš email na rentakar.me (info@rentakar.me) — DNS zapisi za email moraju ostati. Cloudflare će ih obično importovati automatski iz Hostinger-a, ali **provjeri** da MX zapisi i DKIM/SPF rade. Možeš testirati slanjem test maila.

## Brzi summary komandi

```bash
# Inicijalni push (samo prvi put)
git remote add origin https://github.com/<USERNAME>/rentakar.me.git
git branch -M main
git push -u origin main

# Svaka sljedeća izmjena
git add .
git commit -m "Opis promjene"
git push

# Lokalno testiranje prije push-a
npm run dev      # dev server
npm run build    # provjera da build prolazi
```
