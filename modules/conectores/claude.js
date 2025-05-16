const axios = require("axios");

module.exports = async function responderClaude(input) {
  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-opus-20240229",
        messages: [{ role: "user", content: input }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.CLAUDE_3_OPUS_20240229_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "[Claude] Sin respuesta.";
  } catch (error) {
    console.error("❌ Error con Claude:", error.response?.data || error.message);
    return "[Claude] Fallo de conexión.";
  }
};
