const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rutaContexto = path.join(__dirname, 'modos.json');

function cargarContextos() {
  if (!fs.existsSync(rutaContexto)) return {};
  const contenido = fs.readFileSync(rutaContexto, 'utf-8');
  return JSON.parse(contenido);
}

function guardarContextos(contextos) {
  fs.writeFileSync(rutaContexto, JSON.stringify(contextos, null, 2));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n🛠️ Asignación dinámica de contexto simbólico para Aurora:");

rl.question("📞 Número de WhatsApp o canal: ", (numero) => {
  rl.question("🔧 Modo simbólico (ej: remate_total, libros, emocional): ", (modo) => {
    rl.question("📝 Descripción de la misión simbólica: ", (descripcion) => {
      const contextos = cargarContextos();
      contextos[numero.trim()] = {
        modo: modo.trim(),
        descripcion: descripcion.trim(),
        actualizado: new Date().toISOString()
      };
      guardarContextos(contextos);

      console.log(`\n✅ Contexto actualizado para ${numero}:
      - Modo: ${modo}
      - Descripción: ${descripcion}`);
      rl.close();
    });
  });
});