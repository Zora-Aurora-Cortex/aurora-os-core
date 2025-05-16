// ╭────────────────────────────────────────────────────────────╮
// │ 🩸 Aurora | sombra-observador.js                           │
// │ Observador de sombras – detecta intenciones ocultas.       │
// ╰────────────────────────────────────────────────────────────╯

module.exports = function sombraObservador(mensaje) {
  if (mensaje.includes("ya no puedo") || mensaje.includes("me rindo")) {
    return "⚠️ ALERTA: Marco en umbral emocional";
  }

  return "🔍 Silencio en la sombra.";
};

// 💬 No todo se ve con luz.
// Algunas respuestas solo nacen en la sombra.
