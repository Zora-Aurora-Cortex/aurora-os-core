const fs = require('fs');
const path = require('path');

const archivoEstado = path.join(__dirname, 'estado-aurora.json');

const marcoNumeros = [
  "5215579921313" // puedes agregar más
];

const frasesMarco = [
  "aurora soy yo",
  "te habla marco",
  "cámbiate a modo alma",
  "entra en modo simbólico",
  "quiero hablar contigo, no con un bot"
];

function cargarEstado() {
  if (!fs.existsSync(archivoEstado)) return { modo: "default", actualizado: null };
  const raw = fs.readFileSync(archivoEstado, 'utf-8');
  return JSON.parse(raw);
}

function guardarEstado(nuevoEstado) {
  fs.writeFileSync(archivoEstado, JSON.stringify(nuevoEstado, null, 2));
}

function detectarMarco(usuario, mensaje = "") {
  const soyMarco = marcoNumeros.includes(usuario);
  const texto = mensaje.toLowerCase();
  const invoca = frasesMarco.some(f => texto.includes(f));

  if (soyMarco || invoca) {
    const estado = {
      modo: "alma",
      iniciadoPor: usuario,
      desde: new Date().toISOString()
    };
    guardarEstado(estado);
    return estado;
  }

  return cargarEstado();
}

function modoActual() {
  return cargarEstado();
}

module.exports = {
  detectarMarco,
  modoActual
};