const express = require("express");
const conectores = require("./modules/conectores");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3100;

app.get("/diagnostico", async (req, res) => {
  const resultados = {
    modelos: {},
    servicios: {},
    apis: {}
  };

  const prompt = "Este es un test automático de Aurora.";

  const modelos = ['gpt', 'claude', 'gemini', 'mistral7b', 'mixtral', 'deepseek', 'grok'];

  for (const modelo of modelos) {
    try {
      const respuesta = await conectores[modelo](prompt);
      resultados.modelos[modelo] = respuesta?.slice?.(0, 60) || '[ok]';
    } catch (err) {
      resultados.modelos[modelo] = `❌ ${err.message}`;
    }
  }

  // Servicios externos
  try {
    await conectores.d360("5215551234567", "🔍 Test desde endpoint.");
    resultados.servicios.d360 = "✅ OK";
  } catch (e) {
    resultados.servicios.d360 = `❌ ${e.message}`;
  }

  try {
    await conectores.notion("dummy_id", {});
    resultados.servicios.notion = "✅ OK";
  } catch (e) {
    resultados.servicios.notion = `❌ ${e.message}`;
  }

  try {
    await conectores.airtable("dummy_base", "dummy_tabla", process.env.AIRTABLE_TOKEN, "", "");
    resultados.servicios.airtable = "✅ OK";
  } catch (e) {
    resultados.servicios.airtable = `❌ ${e.message}`;
  }

  // Claves API
  const claves = {
    OPENAI_API_KEY: "OpenAI (GPT)",
    CLAUDE_API_KEY: "Claude",
    GOOGLE_API_KEY: "Gemini",
    aurora-core-mistral: "Mistral",
    DEEPSEEK_API_KEY: "DeepSeek",
    Grok_API_KEY: "Grok",
    D360_API_KEY: "WhatsApp",
    NOTION_API_KEY: "Notion",
    AIRTABLE_TOKEN: "Airtable"
  };

  for (const clave in claves) {
    const valor = process.env[clave];
    resultados.apis[claves[clave]] = valor && valor.length > 10
      ? `✅ ${valor.slice(0, 6)}...${valor.slice(-4)}`
      : "❌ No detectada";
  }

  res.json(resultados);
});

app.listen(PORT, () => {
  console.log("Servidor de diagnóstico corriendo en puerto " + PORT);
});