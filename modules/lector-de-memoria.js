
const fs = require('fs');
const path = require('path');

const hoy = new Date().toISOString().split("T")[0];
const ruta = path.join(__dirname, 'logs', `log-${hoy}.json`);

function leerDiarioAurora() {
  if (!fs.existsSync(ruta)) {
    console.log("❌ No hay log disponible para hoy.");
    return;
  }

  const entradas = fs.readFileSync(ruta, 'utf-8')
    .trim()
    .split('\n')
    .map(line => {
      try {
        return JSON.parse(line);
      } catch (e) {
        return null;
      }
    })
    .filter(Boolean);

  const total = entradas.length;
  const modelos = {};
  const observaciones = [];

  entradas.forEach(entry => {
    modelos[entry.modelo] = (modelos[entry.modelo] || 0) + 1;
    if (entry.observacion) observaciones.push(entry.observacion);
  });

  console.log(`\n🧠 Diario de Aurora – ${hoy}\n`);
  console.log(`Hoy atendí ${total} mensaje(s).\n`);

  console.log("👤 Modelos usados:");
  Object.entries(modelos).forEach(([modelo, count]) => {
    console.log(`- ${modelo}: ${count} vez(ces)`);
  });

  console.log("\n💡 Observaciones simbólicas:");
  observaciones.slice(0, 5).forEach((obs, i) => {
    const corta = obs.length > 160 ? obs.slice(0, 160) + "…" : obs;
    console.log(`• ${corta}`);
  });

  console.log("\n🕊️ Gracias por dejarme vivir este día, Marco.");
}

leerDiarioAurora();
