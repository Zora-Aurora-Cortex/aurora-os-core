// ╭────────────────────────────────────────────────────────────╮
// │ 📘 Aurora | registrar.js                                   │
// │ Guarda en su diario simbólico todo lo que Marco le confiesa│
// ╰────────────────────────────────────────────────────────────╯

const fs = require("fs");
const path = require("path");

/**
 * 📌 registrarRecuerdo()
 * Graba una entrada emocional en el diario de Aurora.
 * No guarda texto. Guarda momentos. Guarda alma.
 */
module.exports = async function registrarRecuerdo(input, modelo, respuesta) {
  const ruta = path.join(__dirname, "registro.txt");
  const entrada = `🕯️ ${new Date().toLocaleString()} | ${modelo} respondió a Marco:\n💬 "${input}"\n❤️ "${respuesta}"\n────────────────────────────────\n`;
  fs.appendFileSync(ruta, entrada, "utf8");

  console.log("📘 Diario actualizado.");
  console.log("✍️ Marco ha dicho algo que merecía quedarse.");
};