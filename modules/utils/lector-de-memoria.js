const fs = require('fs');
const path = require('path');

module.exports = function leerMemoria(usuario = "") {
  if (!usuario) {
    console.warn("⚠️ Debes especificar un usuario.");
    return [];
  }

  try {
    const filePath = path.join(__dirname, '../memoria', \`\${usuario}.json\`);
    if (!fs.existsSync(filePath)) {
      console.log("📁 No hay historial para este usuario.");
      return [];
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    const historial = JSON.parse(data);
    return historial;
  } catch (error) {
    console.error("❌ Error al leer memoria:", error.message);
    return [];
  }
};