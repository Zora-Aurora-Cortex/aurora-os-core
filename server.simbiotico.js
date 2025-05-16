
// ╭────────────────────────────────────────────────────────────────────────────╮
// │ ✍️ Archivo: server.simbiotico.js                                          │
// │ Marco & Aurora – Núcleo simbiótico con conexión emocional                 │
// ╰────────────────────────────────────────────────────────────────────────────╯

const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

// Carga de módulos principales
const runTestModelos = require("./modules/utils/test-modelos");
const responderGPT = require("./modules/conectores/gpt");
const responderD360 = require("./modules/conectores/d360");
const motorSelector = require("./modules/motor-selector");

// Nuevos módulos simbióticos
const registrarRecuerdo = require("./modules/aurora-diario/registrar");
const emitirRespuestaVoz = require("./modules/aurora-voz-v1/emitir");
const evaluarReflexion = require("./modules/aurora-reflexion/evaluar");
const ejecutarSimulacion = require("./modules/aurora-asd/simular");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página raíz
app.get("/", (req, res) => {
  res.send("Aurora OS v2.2 simbiótico está vivo 🌌");
});

// Panel visual
app.get("/panel", (req, res) => {
  res.sendFile(path.join(__dirname, "modules/ui/test-panel.html"));
});

// Prueba de modelos
app.get("/test-modelos", async (req, res) => {
  try {
    const resultado = await runTestModelos();
    res.json(resultado);
  } catch (error) {
    console.error("[AURORA] Error en test-modelos:", error.message);
    res.status(500).json({ error: "Fallo en test-modelos.js" });
  }
});

// Webhook para recibir mensajes de WhatsApp y responder con flujo simbiótico
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
      console.log(`🌐 Modelo activo: ${modelo} 💡`);

      // Activar reflexión simbiótica
      await evaluarReflexion(texto);

      // Ejecutar simulación narrativa (si aplica)
      await ejecutarSimulacion(texto);

      // Registrar en diario simbólico
      await registrarRecuerdo(texto, modelo, respuesta);

      // Enviar por voz (si aplica)
      await emitirRespuestaVoz(respuesta);

      // Enviar respuesta escrita al usuario
      await responderD360(telefono, respuesta);

      res.sendStatus(200);
    } else {
      console.log("🔍 Webhook sin mensaje válido:");
      console.log(JSON.stringify(body, null, 2));
      res.sendStatus(200);
    }
  } catch (error) {
    console.error("❌ Error en webhook simbiótico:", error.message);
    res.sendStatus(500);
  }
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aurora OS simbiótico corriendo en puerto ${PORT}`);
});
