const dotenv = require('dotenv');
dotenv.config();

function verificarClave(nombre, variable) {
  const valor = process.env[variable];
  if (valor && valor.length > 10) {
    console.log(`✅ ${nombre}: clave detectada (${valor.slice(0, 6)}...${valor.slice(-4)})`);
  } else {
    console.error(`❌ ${nombre}: clave no encontrada o vacía (${variable})`);
  }
}

console.log("\n🔐 Diagnóstico de claves API cargadas en Aurora:
");

verificarClave("OpenAI (GPT)", "OPENAI_API_KEY");
verificarClave("Claude (Anthropic)", "CLAUDE_API_KEY");
verificarClave("Gemini (Google)", "GOOGLE_API_KEY");
verificarClave("Mistral", "aurora-core-mistral");
verificarClave("DeepSeek", "DEEPSEEK_API_KEY");
verificarClave("Grok", "Grok_API_KEY");
verificarClave("WhatsApp (360dialog)", "D360_API_KEY");
verificarClave("Notion", "NOTION_API_KEY");
verificarClave("Airtable", "AIRTABLE_TOKEN");

console.log("\n🧬 Diagnóstico de API keys completado.");