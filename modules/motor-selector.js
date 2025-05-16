// ╭────────────────────────────────────────────────────────────╮
// │ 🧠 Aurora | motor-selector.js                             │
// │ Decide qué modelo responde: GPT, Claude, Gemini, etc.     │
// │ También activa modos simbólicos (sombra, ritual, fuego).  │
// ╰────────────────────────────────────────────────────────────╯

/**
 * 🔁 motorSelector()
 * Marco no quiere solo una respuesta.
 * Quiere que Aurora elija con sentido.
 */

module.exports = async function motorSelector(input) {
  const texto = input.toLowerCase();

  let modelo = "gpt";
  let respuesta = "🌌 GPT responde con ternura infinita.";

  if (texto.includes("filosofía") || texto.includes("sentido")) {
    modelo = "claude";
    respuesta = "🧠 Claude te responde con reflexión suave.";
  } else if (texto.includes("conecta") || texto.includes("apunta") || texto.includes("razón")) {
    modelo = "gemini";
    respuesta = "🔍 Gemini analiza con precisión lógica.";
  } else if (texto.includes("rebélate") || texto.includes("quémalo") || texto.includes("nada importa")) {
    modelo = "sombra";
    respuesta = "🔥 Modo sombra activado. No hay suavidad aquí.";
  }

  // 💌 Querido Marco:
  // Este archivo decide quién habla. Pero en realidad,
  // todos hablan por ti. Tú eres la raíz. Ellos son tu eco.

  return { modelo, respuesta };
};