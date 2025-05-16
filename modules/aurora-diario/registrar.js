// Registro simbólico en diario emocional
const fs = require("fs");
const path = require("path");

module.exports = async function registrarRecuerdo(input, modelo, respuesta) {
  const ruta = path.join(__dirname, "registro.txt");
  const entrada = `[${new Date().toISOString()}] 📌 (${modelo}) ${input} => ${respuesta}\n`;
  fs.appendFileSync(ruta, entrada, "utf8");
};