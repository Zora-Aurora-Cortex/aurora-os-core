const leerLogs = require('./lector-de-logs');
const readline = require('readline');

function mostrarLogs(logs) {
  if (!logs.length) {
    console.log("❌ No hay registros disponibles.");
    return;
  }

  console.log(`\n📘 Total de respuestas registradas: ${logs.length}\n`);

  logs.forEach((log, index) => {
    console.log(\`🧾 \${index + 1}. [\${log.timestamp}]\n🧠 Modelo: \${log.modelo}\n💬 Prompt: \${log.prompt}\n🪄 Respuesta: \${log.resultado}\n👁️ Observación: \${log.observacion}\n\`);
  });
}

// Interfaz CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("📅 ¿Deseas revisar una fecha específica? (YYYY-MM-DD o Enter para todos): ", function (fecha) {
  const logs = leerLogs(fecha.trim());
  mostrarLogs(logs);
  rl.close();
});