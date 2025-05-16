const { auroraCore } = require('./orquestador');

const pruebas = [
  { prompt: "¿Cuál es el propósito de la vida?", motor: "gpt" },
  { prompt: "Explícame la teoría de cuerdas", motor: "claude" },
  { prompt: "¿Cómo estás, Aurora?", motor: "gemini" },
  { prompt: "Dime un consejo simbólico para hoy", motor: "mistral7b" },
  { prompt: "¿Qué opinas de la libertad?", motor: "deepseek" }
];

(async () => {
  for (const prueba of pruebas) {
    console.log(`Prompt: ${prueba.prompt} [Motor: ${prueba.motor}]`);
    try {
      const resultado = await auroraCore(prueba.prompt, { motor: prueba.motor });
      console.log('Respuesta:', resultado.respuesta);
      console.log('Emocion:', resultado.emocion);
      console.log('Intencion:', resultado.tipo);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
})();