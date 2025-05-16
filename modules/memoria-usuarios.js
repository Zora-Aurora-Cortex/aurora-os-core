
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'memoria');

function getUserFilePath(usuario) {
  return path.join(baseDir, `${usuario}.json`);
}

function obtenerHistorial(usuario) {
  try {
    const filePath = getUserFilePath(usuario);
    if (!fs.existsSync(filePath)) return [];
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
  } catch (error) {
    console.error('❌ Error al obtener historial:', error.message);
    return [];
  }
}

function guardarInteraccion({
  usuario = "anonimo",
  mensaje = "",
  respuesta = "",
  emocion = "neutral",
  simbolismo = {},
  observacion = "",
  canal = "default",
  motor = "gpt"
}) {
  try {
    if (!mensaje && !respuesta) return;

    const historial = obtenerHistorial(usuario);
    historial.push({
      mensaje,
      respuesta,
      emocion,
      simbolismo,
      observacion,
      canal,
      motor,
      timestamp: new Date().toISOString()
    });

    const filePath = getUserFilePath(usuario);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(historial, null, 2));
  } catch (error) {
    console.error('❌ Error al guardar interacción simbólica:', error.message);
  }
}

module.exports = {
  obtenerHistorial,
  guardarInteraccion
};
