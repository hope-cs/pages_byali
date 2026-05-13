// /* ============================================================
//    ANDAAZ BRIDAL WEAR — JAVASCRIPT
   
//    Currently handles:
//    - Logo image fallback (shows first letter if image fails)
//    - WhatsApp number formatter
   
//    CHANGE FOR NEXT CLIENT:
//    Only update the CLIENT CONFIG section below
//    ============================================================ */


document.addEventListener("DOMContentLoaded", function () {

  // CHANGE FOR NEXT CLIENT: Update WhatsApp number
  // Format: 92 + number without leading 0
  // Example: 0300-1234567 → 923001234567
  const btn = document.getElementById("whatsapp-btn");
  if (btn) {
    btn.href = "https://wa.me/923709190104";
  }

});

// /* ============================================================
//    CLIENT CONFIG — CHANGE THIS FOR EVERY NEW CLIENT
//    ============================================================ */
// const CLIENT = {

//   /* WhatsApp number — Pakistan format
//      Write the number WITHOUT the leading 0
//      Example: 0300-1234567 → write as 923001234567
//      92 = Pakistan country code */
//   whatsappNumber: "923131998765",

//   /* First letter of client name — shown if logo image fails to load */
//   logoFallbackLetter: "A",

// };
// /* ============================================================
//    END OF CLIENT CONFIG
//    ============================================================ */




// /* ── Auto-set WhatsApp button link from config ── */
// document.addEventListener("DOMContentLoaded", function () {

//   /* Set WhatsApp button href */
//   const btn = document.getElementById("whatsapp-btn");
//   if (btn) {
//     btn.href = "https://wa.me/" + CLIENT.whatsappNumber;
//   }

//   /* Logo fallback — if image fails, show first letter */
//   const logoImg = document.getElementById("logo-img");
//   const logoFallback = document.getElementById("logo-fallback");
//   if (logoImg && logoFallback) {
//     logoFallback.textContent = CLIENT.logoFallbackLetter;
//     logoImg.addEventListener("error", function () {
//       logoImg.style.display = "none";
//       logoFallback.style.display = "flex";
//     });
//   }

// });
