# Apps Script — uputstvo za deploy

Skripta `APPS-SCRIPT-NEW.gs` je ažurirana sa novim tabom **Ture** i automatskim
kreiranjem hedera. Mora se postaviti u Google Apps Script editor i ponovo
objaviti kao Web App.

## Korak 1 — otvori Apps Script

1. Otvori Google Sheets fajl u koji već stižu rent a car upiti.
2. U meniju klikni **Extensions → Apps Script**.
3. Otvoriće se editor sa postojećim `Code.gs` fajlom.

## Korak 2 — zalijepi novi kod

1. U Apps Script editoru selektuj cjelokupan sadržaj `Code.gs` fajla
   (`Cmd+A` na Macu, `Ctrl+A` na Windowsu) i obriši ga.
2. Otvori fajl `APPS-SCRIPT-NEW.gs` iz ovog projekta i kopiraj ceo sadržaj.
3. Zalijepi u prazan `Code.gs` u Apps Script editoru.
4. Klikni **💾 Save** ikonicu (ili `Cmd+S`).

## Korak 3 — re-deploy kao Web App

> **Važno:** ne pravi nov deployment — modifikuj postojeći. Ako napraviš novi,
> dobićeš novi URL i moraćeš da mijenjaš `client/src/lib/googleSheets.ts`.

1. U gornjem desnom uglu klikni **Deploy → Manage deployments**.
2. Pronađi postojeći aktivni deployment (sa kvačicom).
3. Klikni ikonicu olovke (✏️) pored njega.
4. U polju **Version** odaberi **New version**.
5. U polje **Description** ukucaj: `v2 — added Ture tab + auto headers`.
6. Klikni **Deploy**.
7. URL ostaje isti, samo se kod osvježio.

## Korak 4 — testiraj

1. Otvori `rentakar.me` u browseru.
2. Idi na bilo koju stranicu ture (npr. `/ture/boka-bay-tour`).
3. Popuni formu sa testnim podacima i pošalji.
4. Otvori Google Sheets — trebao bi da postoji novi tab **Ture** sa hederima
   i jednim novim redom.

## Šta ako se nešto pokvari

- Ako forma ne snima u Sheet: provjeri da li je u **Manage deployments**
  ostao isti URL kao u `client/src/lib/googleSheets.ts`.
- Ako se headerji ne pojavljuju: u Apps Script editoru pokreni funkciju
  `addHeaders` ručno (selektuj je iz dropdowna pored "Run" dugmeta) — to će
  ti tražiti dozvole prvi put.
- Ako Apps Script traži dozvole: klikni **Review permissions → Advanced →
  Go to (project name) (unsafe) → Allow**. To je očekivano kod ličnih
  skripti.

## Backup

Stari kod uvijek možeš vratiti preko **Deploy → Manage deployments → klik
na olovku → Version → odaberi prethodnu verziju iz dropdowna**.
