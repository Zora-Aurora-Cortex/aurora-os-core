const axios = require("axios");

module.exports = async function responderGemini(input) {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        model: "gemini-pro",
        messages: [{ role: "user", content: input }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.GEMINI_PRO_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "[Gemini] Sin respuesta.";
  } catch (error) {
    console.error("❌ Error con Gemini:", error.response?.data || error.message);
    return "[Gemini] Fallo de conexión.";
  }
};
