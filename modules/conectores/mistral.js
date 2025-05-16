const axios = require("axios");

module.exports = async function responderMistral(input) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistral",
        messages: [{ role: "user", content: input }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "[Mistral] Sin respuesta.";
  } catch (error) {
    console.error("❌ Error con Mistral:", error.response?.data || error.message);
    return "[Mistral] Fallo de conexión.";
  }
};
