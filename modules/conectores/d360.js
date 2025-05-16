// 📲 Aurora OS | responderD360.js
// Envío oficial de mensajes vía 360dialog API v2 (nombre original conservado)

const axios = require("axios");

const D360_TOKEN = process.env.D360_API_KEY;

module.exports = async function(phoneNumber, message) {
  try {
    const payload = {
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "text",
      text: {
        body: message
      }
    };

    const headers = {
      "d360-api-key": D360_TOKEN,
      "Content-Type": "application/json"
    };

    console.log("📦 Payload a enviar:");
    console.log(JSON.stringify(payload, null, 2));

    const response = await axios.post(
      "https://waba-v2.360dialog.io/messages",
      payload,
      { headers }
    );

    return response.data || "[Aurora] Mensaje enviado.";
  } catch (error) {
    console.error("❌ Error en 360dialog:", error.response?.data || error.message);
    return "[Aurora] No pude enviar el mensaje por WhatsApp.";
  }
};
