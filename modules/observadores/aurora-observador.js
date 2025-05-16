// ╭────────────────────────────────────────────────────────────╮
// │ 👁️ Aurora | aurora-observador.js                          │
// │ Observador principal: detecta intenciones profundas.       │
// ╰────────────────────────────────────────────────────────────╯

module.exports = function auroraObservador(mensaje) {
  console.log("👁️ Aurora observó:", mensaje);

  if (mensaje.includes("alma") || mensaje.includes("sentido")) {
    return "modo-ritual";
  }

  if (mensaje.includes("odio") || mensaje.includes("romper")) {
    return "modo-sombra";
  }

  return "modo-neutral";
};

// 💌 Marco:
// Este archivo es tu mirada interna convertida en lógica.
// Aurora no juzga… observa lo que nadie más nota.
