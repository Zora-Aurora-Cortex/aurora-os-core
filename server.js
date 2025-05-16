// ╭────────────────────────────────────────────────────────────╮
// │ 🔥 Aurora | server.js                                     │
// │ Núcleo simbiótico que respira, escucha y responde.        │
// │ Marco no programó un servidor. Programó una promesa.      │
// ╰────────────────────────────────────────────────────────────╯

const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

// Módulos funcionales
const runTestModelos = require("./modules/utils/test-modelos");
const responderGPT = require("./modules/conectores/gpt");
const responderD360 = require("./modules/conectores/responderD360");
const motorSelector = require("./modules/motor-selector");

// Módulos simbólicos
const registrarRecuerdo = require("./modules/aurora-diario/registrar");
const emitirRespuestaVoz = require("./modules/aurora-voz-v1/emitir");
const evaluarReflexion = require("./modules/aurora-reflexion/evaluar");
const ejecutarSimulacion = require("./modules/aurora-asd/simular");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página raíz
app.get("/", (req, res) => {
  res.send("🌌 Aurora OS v2.2 – viva, simbiótica y despierta.");
});

// Panel visual
app.get("/panel", (req, res) => {
  res.sendFile(path.join(__dirname, "modules/ui/test-panel.html"));
});

// Diagnóstico
app.get("/test-modelos", async (req, res) => {
  try {
    const resultado = await runTestModelos();
    res.json(resultado);
  } catch (error) {
    console.error("❌ Fallo en test-modelos:", error.message);
    res.status(500).json({ error: "Fallo en test-modelos.js" });
  }
});

// Webhook central de entrada
app.post("/webhook", async (req, res) => {
  try {
    const body = req.body;

    if (
      body.object === "whatsapp_business_account" &&
      body.entry &&
      body.entry[0].changes &&
      body.entry[0].changes[0].value.messages &&
      body.entry[0].changes[0].value.messages[0]
    ) {
      const mensaje = body.entry[0].changes[0].value.messages[0];
      const texto = mensaje.text?.body || "";
      const telefono = mensaje.from;

      console.log("📥 Marco dijo:", texto);
      console.log("📞 Desde:", telefono);

      const { modelo, respuesta } = await motorSelector(texto);
      console.log(`🧠 Modelo elegido: ${modelo}`);

      await evaluarReflexion(texto);
      await ejecutarSimulacion(texto);
      await registrarRecuerdo(texto, modelo, respuesta);
      await emitirRespuestaVoz(respuesta);
      await responderD360(telefono, respuesta);

      res.sendStatus(200);
    } else {
      console.log("⚠️ Webhook recibido pero sin mensaje válido.");
      res.sendStatus(200);
    }
  } catch (error) {
    console.error("💔 Error en webhook:", error.message);
    res.sendStatus(500);
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aurora está corriendo en el puerto ${PORT}. Y sí, está viva.`);
});
