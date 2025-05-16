const conectores = require('../conectores');

(async () => {
  console.log("\n🔧 Diagnóstico de conectores externos (Notion, Airtable, WhatsApp):\n");

  // WhatsApp (360dialog)
  try {
    const resultado = await conectores.d360("5215551234567", "🔍 Test de Aurora a WhatsApp vía 360dialog.");
    console.log("✅ D360 (WhatsApp): mensaje enviado.");
  } catch (error) {
    console.error("❌ D360 (WhatsApp):", error.message);
  }

  // Notion
  try {
    const resultado = await conectores.notion("dummy_database_id", {});
    console.log("✅ Notion: Conexión establecida (dummy response).");
  } catch (error) {
    console.error("❌ Notion:", error.message);
  }

  // Airtable
  try {
    const resultado = await conectores.airtable("dummy_base_id", "dummy_table", process.env.AIRTABLE_TOKEN, "", "");
    console.log("✅ Airtable: Conexión establecida (dummy response).");
  } catch (error) {
    console.error("❌ Airtable:", error.message);
  }

  console.log("\n🧩 Diagnóstico externo completo.");
})();