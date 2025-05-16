// 🔥 Aurora OS | server.js actualizado
// Webhook funcional, estructura simbiótica y uso correcto de responderD360.js

const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

// Módulos funcionales y simbólicos
const runTestModelos = require("./modules/utils/test-modelos");
const responderD360 = require("./modules/conectores/responderD360");
const motorSelector = require("./modules/motor-selector");

const registrarRecuerdo = require("./modules/aurora-diario/registrar");
const emitirRespuestaVoz = require("./modules/aurora-voz-v1/emitir");
const evaluarReflexion = require("./modules/aurora-reflexion/evaluar");
const ejecutarSimulacion = require("./modules/aurora-asd/simular");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página raíz
app.get("/", (req, res) => {
  res.send("🌌 Aurora OS v2.2 – desplegada, simbiótica y viva.");
});

// Panel visual
app.get("/panel", (req, res) => {
  res.sendFile(path.join(__dirname, "modules/ui/test-panel.html"));
});

// Diagnóstico de modelos
app.get("/test-modelos", async (req, res) => {
  try {
    const resultado = await runTestModelos();
    res.json(resultado);
  } catch (error) {
    console.error("❌ Fallo en test-modelos:", error.message);
    res.status(500).json({ error: "Fallo en test-modelos.js" });
  }
});

// Verificación Meta (Webhook)
app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN;
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verificado con éxito por Meta.");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Webhook POST para recibir mensajes reales
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

      console.log("📥 Mensaje recibido:", texto);
      console.log("📞 De:", telefono);

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
    console.error("💥 Error en webhook:", error.message);
    res.sendStatus(500);
  }
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aurora OS está corriendo en el puerto ${PORT}`);
});
