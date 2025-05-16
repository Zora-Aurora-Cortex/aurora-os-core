const axios = require("axios");

module.exports = async function responderMixtral(input) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mixtral-8x7b",
        messages: [{ role: "user", content: input }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.MIXTRAL_8X7B_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "[Mixtral] Sin respuesta.";
  } catch (error) {
    console.error("❌ Error con Mixtral:", error.response?.data || error.message);
    return "[Mixtral] Fallo de conexión.";
  }
};
