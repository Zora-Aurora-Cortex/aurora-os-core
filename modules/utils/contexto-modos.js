
const fs = require('fs');
const path = require('path');

const rutaContexto = path.join(__dirname, 'modos.json');

function cargarContextos() {
  if (!fs.existsSync(rutaContexto)) return {};
  const contenido = fs.readFileSync(rutaContexto, 'utf-8');
  return JSON.parse(contenido);
}

function guardarContextos(contextos) {
  fs.writeFileSync(rutaContexto, JSON.stringify(contextos, null, 2));
}

function setModo(canal, modo, descripcion = "") {
  const contextos = cargarContextos();
  contextos[canal] = {
    modo,
    descripcion,
    actualizado: new Date().toISOString()
  };
  guardarContextos(contextos);
  return contextos[canal];
}

function getModo(canal) {
  const contextos = cargarContextos();
  return contextos[canal] || { modo: "default", descripcion: "sin asignar" };
}

module.exports = {
  setModo,
  getModo
};
