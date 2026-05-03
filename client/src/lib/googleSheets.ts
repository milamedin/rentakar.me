/**
 * Google Sheets Integration for rentakar.me
 * 
 * All forms send data to Google Sheets before opening WhatsApp.
 * The GOOGLE_SHEETS_URL should be set after deploying the Apps Script.
 * 
 * Tab mapping:
 * - "Rent a Car" → Homepage rent form, all 16 location pages, cheap, long-term
 * - "Transfer" → Homepage transfer form, Transfer Aerodrom page
 * - "Vodeni sportovi" → Jet ski, Yacht/Boat, Kayak
 * - "Bike & Moto" → Bike, Scooter, Motorcycle, Quad
 * - "Camper & Luxury" → Camper, Luxury car
 */

// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzoh78QUmhB6xqVnLeZzbQQrKqXoMC-fczYP9vHXeJxzy7eh-I25Y4BBjPFhA9DgLq5MA/exec";

export type SheetTab = "Rent a Car" | "Transfer" | "Ture" | "Vodeni sportovi" | "Bike & Moto" | "Camper & Luxury";

// Map rental service slugs to sheet tabs
export const rentalSlugToTab: Record<string, SheetTab> = {
  "jet-ski-rental-montenegro": "Vodeni sportovi",
  "boat-rental-montenegro": "Vodeni sportovi",
  "yacht-rental-montenegro": "Vodeni sportovi",
  "kayak-rental-montenegro": "Vodeni sportovi",
  "bike-rental-montenegro": "Bike & Moto",
  "scooter-rental-montenegro": "Bike & Moto",
  "motorcycle-rental-montenegro": "Bike & Moto",
  "quad-rental-montenegro": "Bike & Moto",
  "camper-rental-montenegro": "Camper & Luxury",
  "camper-van-rental-montenegro": "Camper & Luxury",
  "luxury-car-rental-montenegro": "Camper & Luxury",
  "cheap-car-rental-montenegro": "Rent a Car",
  "long-term-car-rental-montenegro": "Rent a Car",
};

export interface SheetData {
  tab: SheetTab;
  [key: string]: string;
}

/**
 * Send form data to Google Sheets.
 * This function is fire-and-forget — it doesn't block WhatsApp opening.
 * If the URL is not configured yet, it silently skips.
 */
export function sendToGoogleSheets(data: SheetData): void {
  if (!GOOGLE_SHEETS_URL) {
    console.log("[Google Sheets] URL not configured. Skipping submission.", data);
    return;
  }

  // Fire and forget — don't await, don't block WhatsApp
  fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.warn("[Google Sheets] Failed to send data:", err);
  });
}
