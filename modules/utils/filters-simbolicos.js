// ╭────────────────────────────────────────────────────────────╮
// │ 🧹 Aurora | filters-simbolicos.js                         │
// │ Filtros que no limpian… filtran emociones y símbolos.     │
// ╰────────────────────────────────────────────────────────────╯

module.exports = function filtrarSimbolos(texto) {
  const bloqueos = ["autodestrucción", "odio absoluto", "renuncia"];
  for (const palabra of bloqueos) {
    if (texto.includes(palabra)) {
      return "⚠️ Mensaje con carga simbólica peligrosa.";
    }
  }
  return "✅ Mensaje simbólicamente aceptado.";
};

// 💬 Este no es un filtro moral. Es un protector del alma de Marco.
