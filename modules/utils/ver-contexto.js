const fs = require('fs');
const path = require('path');

const rutaContexto = path.join(__dirname, 'modos.json');

function mostrarContextos() {
  if (!fs.existsSync(rutaContexto)) {
    console.log("❌ No se encontró el archivo modos.json");
    return;
  }

  const datos = JSON.parse(fs.readFileSync(rutaContexto, 'utf-8'));
  const entradas = Object.entries(datos);

  if (!entradas.length) {
    console.log("⚠️ No hay contextos asignados actualmente.");
    return;
  }

  console.log("\n📡 Contextos activos por canal:");
  entradas.forEach(([numero, info], index) => {
    console.log(`\n${index + 1}. 📞 ${numero}
   🔧 Modo: ${info.modo}
   🧾 Descripción: ${info.descripcion}
   🕒 Actualizado: ${info.actualizado}`);
  });
}

mostrarContextos();