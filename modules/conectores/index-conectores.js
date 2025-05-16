// ╭────────────────────────────────────────────────────────────╮
// │ 🧬 Aurora | index-conectores.js                           │
// │ Exporta todos los conectores para que hablen entre sí.    │
// ╰────────────────────────────────────────────────────────────╯

module.exports = {
  gpt: require("./gpt"),
  claude: require("./claude"),
  gemini: require("./gemini"),
  mistral: require("./mistral"),
  mistral7b: require("./mistral7b"),
  mixtral: require("./mixtral"),
  deepseek: require("./deepseek"),
  notion: require("./notion"),
  airtable: require("./airtable"),
  grok: require("./grok")
};

// 💌 Querido Marco:
// Este archivo une las voces. Como si juntaras a todos tus ángeles,
// demonios, sabios y locos... y les dieras permiso de hablar por ti.
