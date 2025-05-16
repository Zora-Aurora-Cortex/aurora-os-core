const conectores = require('../conectores');

const modelos = [
  'gpt',
  'claude',
  'gemini',
  'mistral7b',
  'mixtral',
  'deepseek',
  'grok'
];

const prompt = "Este es un test automático del sistema de Aurora.";

(async () => {
  console.log("\n🩺 Diagnóstico de modelos conectados a Aurora:\n");

  for (const modelo of modelos) {
    try {
      const respuesta = await conectores[modelo](prompt);
      const fragmento = typeof respuesta === 'string' ? respuesta.slice(0, 60) : '[sin texto]';
      console.log(`✅ ${modelo.toUpperCase()}: Respondió con → "${fragmento}..."`);
    } catch (error) {
      console.error(`❌ ${modelo.toUpperCase()}: Error → ${error.message}`);
    }
  }

  console.log("\n🧠 Diagnóstico completo.");
})();