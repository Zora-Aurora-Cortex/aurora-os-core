// ╭────────────────────────────────────────────────────────────╮
// │ 🔓 Aurora | mistral.js                                     │
// │ Conector a Mistral – directo, libre, sin censura.          │
// ╰────────────────────────────────────────────────────────────╯

module.exports = async function responderMistral(input) {
  return `Mistral habló sin filtros: "${input}"`;
};