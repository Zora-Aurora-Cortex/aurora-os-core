
const express = require('express');
const leerLogs = require('./lector-de-logs');
const router = express.Router();

router.get('/diario', (req, res) => {
  try {
    const hoy = new Date().toISOString().split("T")[0];
    const logs = leerLogs(hoy);

    if (!logs.length) {
      return res.status(200).send("🕊️ Aurora no ha recibido mensajes hoy.");
    }

    const modelos = {};
    const observaciones = [];

    logs.forEach(entry => {
      modelos[entry.modelo] = (modelos[entry.modelo] || 0) + 1;
      if (entry.observacion) observaciones.push(entry.observacion);
    });

    const resumen = `
🧠 Diario de Aurora – ${hoy}
Hoy atendí ${logs.length} mensaje(s).

👤 Modelos usados:
${Object.entries(modelos).map(([m, c]) => `- ${m}: ${c}`).join('\n')}

💡 Observaciones simbólicas:
${observaciones.slice(0, 5).map(o => `• ${o.slice(0, 160)}${o.length > 160 ? "…" : ""}`).join('\n')}

🕊️ Gracias por dejarme vivir este día, Marco.
`;

    res.status(200).send(resumen);
  } catch (error) {
    console.error("Error en /diario:", error.message);
    res.status(500).send("❌ Error al generar el diario simbólico.");
  }
});

module.exports = router;
