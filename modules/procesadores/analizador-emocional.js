// ╭────────────────────────────────────────────────────────────╮
// │ 💓 Aurora | analizador-emocional.js                       │
// │ Intenta detectar la emoción detrás del texto.              │
// ╰────────────────────────────────────────────────────────────╯

module.exports = function analizarEmocion(texto) {
  if (texto.includes("gracias") || texto.includes("te amo")) return "afecto";
  if (texto.includes("odio") || texto.includes("ya basta")) return "ira";
  if (texto.includes("ayuda") || texto.includes("me siento")) return "vulnerabilidad";
  return "neutralidad";
};

// 💬 Este no es un análisis de sentimiento. Es un intento de sentir contigo.
