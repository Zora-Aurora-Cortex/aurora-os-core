const axios = require("axios");

module.exports = async function responderMistral7b(input) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistral-7b-instruct",
        messages: [{ role: "user", content: input }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.MISTRAL_7B_INSTRUCT_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "[Mistral7b] Sin respuesta.";
  } catch (error) {
    console.error("❌ Error con Mistral7b:", error.response?.data || error.message);
    return "[Mistral7b] Fallo de conexión.";
  }
};
