const leerMemoria = require('./lector-de-memoria');
const readline = require('readline');

function mostrarHistorial(usuario) {
  const historial = leerMemoria(usuario);
  if (!historial.length) {
    console.log(`No hay memoria registrada para "${usuario}".`);
    return;
  }

  console.log(`\n📜 Historial de ${usuario} (${historial.length} entradas):\n`);
  historial.forEach((item, index) => {
    console.log(
      `${index + 1}. [${item.timestamp}] ${item.role.toUpperCase()} → ${item.content}`
    );
  });
}

// Interfaz para entrada desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("🔍 ¿Qué usuario quieres consultar? ", function (usuario) {
  mostrarHistorial(usuario.trim());
  rl.close();
});