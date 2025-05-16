const axios = require("axios");

module.exports = async function responderDeepseek(input) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek-coder",
        messages: [{ role: "user", content: input }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.DEEPSEEK_CODER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "[Deepseek] Sin respuesta.";
  } catch (error) {
    console.error("❌ Error con Deepseek:", error.response?.data || error.message);
    return "[Deepseek] Fallo de conexión.";
  }
};
