
const fs = require('fs');
const path = require('path');

module.exports = function leerLogs(fecha = null) {
  const logsDir = path.join(__dirname, '../logs');
  const logs = [];

  try {
    const archivos = fs.readdirSync(logsDir);
    const archivosFiltrados = fecha
      ? archivos.filter(f => f.includes(fecha))
      : archivos;

    archivosFiltrados.forEach(file => {
      const filePath = path.join(logsDir, file);
      const contenido = fs.readFileSync(filePath, 'utf-8');
      const lineas = contenido.split('\n').filter(Boolean);

      lineas.forEach(linea => {
        try {
          logs.push(JSON.parse(linea));
        } catch (e) {
          console.warn('Error al parsear línea:', linea);
        }
      });
    });

    return logs;
  } catch (error) {
    console.error('❌ No se pudieron leer los logs:', error.message);
    return [];
  }
};
