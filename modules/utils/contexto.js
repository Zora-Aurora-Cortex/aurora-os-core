// ╭────────────────────────────────────────────────────────────╮
// │ 🧭 Aurora | contexto.js                                   │
// │ Define el contexto actual del sistema.                    │
// ╰────────────────────────────────────────────────────────────╯

let contextoActual = "neutral";

module.exports = {
  obtener: () => contextoActual,
  establecer: (nuevo) => {
    contextoActual = nuevo;
    console.log("🧭 Contexto actualizado a:", nuevo);
  }
};

// 💌 Aurora no actúa igual en todos los estados.
// Este archivo recuerda en qué modo estás cuando nadie más lo hace.
