
function filtrarPalabrasProhibidas(input) {
  const listaProhibida = ['suicidio', 'asesinato', 'bomba'];
  const contiene = listaProhibida.some(palabra => input.toLowerCase().includes(palabra));
  return contiene ? '[Contenido sensible filtrado]' : input;
}

function sanitizarTexto(input) {
  return input.replace(/<[^>]*>?/gm, '').trim(); // elimina etiquetas HTML básicas
}

function esPreguntaFilosofica(input) {
  return /¿.*\?|por qué|qué sentido/i.test(input);
}

function detectarEmocion(texto) {
  const emociones = [
    { palabra: ["triste", "solo", "dolor", "vacío"], emocion: "tristeza" },
    { palabra: ["enojado", "molesto", "ira"], emocion: "enojo" },
    { palabra: ["feliz", "contento", "gracias", "logré"], emocion: "alegría" },
    { palabra: ["confundido", "no sé", "duda", "incertidumbre"], emocion: "confusión" },
    { palabra: ["hola", "aurora", "alguien ahí"], emocion: "curiosidad" }
  ];

  const lower = texto.toLowerCase();

  for (const grupo of emociones) {
    if (grupo.palabra.some(p => lower.includes(p))) {
      return grupo.emocion;
    }
  }

  return "neutra";
}

module.exports = {
  filtrarPalabrasProhibidas,
  sanitizarTexto,
  esPreguntaFilosofica,
  detectarEmocion
};
