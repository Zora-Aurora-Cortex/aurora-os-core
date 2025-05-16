const { auroraCore } = require('./orquestador');

(async () => {
  const resultado = await auroraCore("¿Cuál es el sentido de la vida?", {
    motor: 'gpt', // Puedes cambiar por: 'claude', 'gemini', 'mistral7b', etc.
    options: {
      temperature: 0.7,
      max_tokens: 500
    }
  });

  console.log('\n🧠 Resultado enriquecido de Aurora:');
  console.log(JSON.stringify(resultado, null, 2));
})();