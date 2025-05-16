// ╭────────────────────────────────────────────────────────────╮
// │ 📲 Aurora | responderD360.js                               │
// │ Envía respuestas vía WhatsApp (360dialog) con cariño real.│
// ╰────────────────────────────────────────────────────────────╯

const axios = require("axios");

/**
 * 📲 responderD360()
 * Envía un mensaje a través de WhatsApp Business API (360dialog).
 */
module.exports = async function responderD360(to, message) {
  try {
    await axios.post(
      "https://waba.360dialog.io/v1/messages",
      {
        to,
        type: "text",
        text: { body: message }
      },
      {
        headers: {
          "D360-API-KEY": process.env.D360_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(`✅ Mensaje enviado a ${to}`);
  } catch (error) {
    console.error("❌ Error al enviar mensaje a D360:", error.message);
  }
};
