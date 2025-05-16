const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function transcribirAudioDesdeArchivo(rutaAudio) {
  try {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(rutaAudio));
    formData.append("model", "whisper-1");

    const response = await axios.post("https://api.openai.com/v1/audio/transcriptions", formData, {
      headers: {
        ...formData.getHeaders(),
        Authorization: `Bearer ${OPENAI_API_KEY}`
      }
    });

    return response.data.text;
  } catch (error) {
    console.error("Error al transcribir audio:", error.message);
    return "[Aurora] No pude escuchar este audio correctamente.";
  }
}

module.exports = transcribirAudioDesdeArchivo;