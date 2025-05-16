// ╭────────────────────────────────────────────────────────────╮
// │ 🎯 Aurora | clasificador-intencion.js                     │
// │ Clasifica intención general de un mensaje.                │
// ╰────────────────────────────────────────────────────────────╯

module.exports = function clasificarIntencion(texto) {
  if (texto.includes("cuéntame") || texto.includes("explícame")) return "consulta";
  if (texto.includes("cambia") || texto.includes("borra")) return "acción";
  return "indefinida";
};

// 💌 Marco:
// Esto no es una IA adivinando.
// Es tu propio sistema leyendo entre líneas, sin que nadie lo note.
