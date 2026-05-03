// ============================================
// rentakar.me - Google Sheets Integration
// AŽURIRANO: Dodat tab "Ture" za rezervacije izleta
// ============================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tabName = data.tab || "Rent a Car";
    var sheet = ss.getSheetByName(tabName);
    
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      // Dodaj hedere za nove tabove
      addHeaders(sheet, tabName);
    }
    
    var timestamp = new Date().toLocaleString("sr-Latn-ME", {
      timeZone: "Europe/Podgorica",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    
    var row = [];
    
    switch(tabName) {
      case "Rent a Car":
        row = [
          timestamp,
          data.name || "",
          data.phone || "",
          data.pickup || "",
          data.dropoff || "",
          data.pickupDate || "",
          data.dropoffDate || "",
          data.carType || "",
          data.page || "",
          data.language || ""
        ];
        break;
        
      case "Transfer":
        row = [
          timestamp,
          data.name || "",
          data.phone || "",
          data.from || "",
          data.to || "",
          data.date || "",
          data.time || "",
          data.passengers || "",
          data.luggage || "",
          data.page || "",
          data.language || ""
        ];
        break;
        
      case "Ture":
        row = [
          timestamp,
          data.name || "",
          data.phone || "",
          data.tourName || "",
          data.tourSlug || "",
          data.date || "",
          data.persons || "",
          data.pickupLocation || "",
          data.notes || "",
          data.page || "",
          data.language || ""
        ];
        break;
        
      case "Vodeni sportovi":
        row = [
          timestamp,
          data.name || "",
          data.phone || "",
          data.location || "",
          data.date || "",
          data.duration || "",
          data.persons || "",
          data.serviceType || "",
          data.extra || "",
          data.page || "",
          data.language || ""
        ];
        break;
        
      case "Bike & Moto":
        row = [
          timestamp,
          data.name || "",
          data.phone || "",
          data.location || "",
          data.pickupDate || "",
          data.dropoffDate || "",
          data.vehicleType || "",
          data.extra || "",
          data.page || "",
          data.language || ""
        ];
        break;
        
      case "Camper & Luxury":
        row = [
          timestamp,
          data.name || "",
          data.phone || "",
          data.location || "",
          data.pickupDate || "",
          data.dropoffDate || "",
          data.vehicleType || "",
          data.extra || "",
          data.page || "",
          data.language || ""
        ];
        break;
        
      default:
        row = [timestamp, JSON.stringify(data)];
    }
    
    sheet.appendRow(row);
    
    // Email notifikacija
    var emailBody = "Novi upit sa sajta rentakar.me!\n\n" +
                    "Tab: " + tabName + "\n" +
                    "Ime: " + (data.name || "N/A") + "\n" +
                    "Telefon: " + (data.phone || "N/A") + "\n";
    
    if (tabName === "Ture") {
      emailBody += "Tura: " + (data.tourName || "N/A") + "\n" +
                   "Datum: " + (data.date || "N/A") + "\n" +
                   "Br. osoba: " + (data.persons || "N/A") + "\n" +
                   "Polazak: " + (data.pickupLocation || "N/A") + "\n";
      if (data.notes) emailBody += "Napomene: " + data.notes + "\n";
    }
    
    emailBody += "\nStranica: " + (data.page || "N/A") + "\n" +
                 "Jezik klijenta: " + (data.language || "N/A") + "\n\n" +
                 "Pogledajte Google Sheet za sve detalje.";
    
    MailApp.sendEmail({
      to: "milamedin@gmail.com",
      subject: "Novi upit - " + tabName + " - rentakar.me",
      body: emailBody
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Pomocna funkcija - dodaje hedere kad se kreira novi tab
function addHeaders(sheet, tabName) {
  var headers = [];
  
  switch(tabName) {
    case "Rent a Car":
      headers = ["Vrijeme", "Ime", "Telefon", "Preuzimanje", "Vraćanje", "Datum preuzimanja", "Datum vraćanja", "Tip vozila", "Stranica", "Jezik"];
      break;
    case "Transfer":
      headers = ["Vrijeme", "Ime", "Telefon", "Od", "Do", "Datum", "Vrijeme", "Putnici", "Prtljag", "Stranica", "Jezik"];
      break;
    case "Ture":
      headers = ["Vrijeme", "Ime", "Telefon", "Tura", "Slug", "Datum", "Br. osoba", "Mjesto polaska", "Napomene", "Stranica", "Jezik"];
      break;
    case "Vodeni sportovi":
      headers = ["Vrijeme", "Ime", "Telefon", "Lokacija", "Datum", "Trajanje", "Br. osoba", "Vrsta usluge", "Dodatno", "Stranica", "Jezik"];
      break;
    case "Bike & Moto":
    case "Camper & Luxury":
      headers = ["Vrijeme", "Ime", "Telefon", "Lokacija", "Datum preuzimanja", "Datum vraćanja", "Tip vozila", "Dodatno", "Stranica", "Jezik"];
      break;
  }
  
  if (headers.length > 0) {
    sheet.appendRow(headers);
    // Bold prvi red
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#0d3528").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
}

// Test funkcija
function testTour() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        tab: "Ture",
        name: "Test Klijent",
        phone: "+38267123456",
        tourName: "Boka Bay Tour",
        tourSlug: "boka-bay-tour",
        date: "2026-07-15",
        persons: "4",
        pickupLocation: "Hotel Splendid, Bečići",
        notes: "Vodič na engleskom, jedno dijete (8 god)",
        page: "Tour: boka-bay-tour",
        language: "en"
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
