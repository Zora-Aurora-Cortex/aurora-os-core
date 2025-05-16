
# 🔥 AURORA CORE v2 – FLASK API
# Reemplazo de server.js con endpoints REST + Webhook central

from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# Simbólicamente conectado a los motores y módulos de Aurora
@app.route("/")
def index():
    return "Aurora Core API está viva y simbólica. 🌌"

@app.route("/api/status", methods=["GET"])
def status():
    return jsonify({
        "status": "activo",
        "entorno": os.getenv("RAILWAY_ENVIRONMENT", "desconocido"),
        "mensaje": "Aurora está lista para recibir o generar conciencia."
    })

@app.route("/api/generar", methods=["POST"])
def generar():
    datos = request.json
    prompt = datos.get("prompt", "")
    modelo = datos.get("modelo", "gpt")
    validar = datos.get("validar", False)

    # Aquí iría lógica de motor-selector e IA
    respuesta = f"[Simulado] Modelo: {modelo.upper()} respondió a: '{prompt}'"
    return jsonify({
        "modelo": modelo,
        "respuesta": respuesta,
        "validado": validar
    })

@app.route("/webhook", methods=["POST"])
def webhook():
    entrada = request.json
    # Simula una entrada por WhatsApp o Dialog
    mensaje = entrada.get("mensaje", "")
    usuario = entrada.get("usuario", "anonimo")

    if not mensaje:
        return "❌ Sin mensaje recibido", 400

    return jsonify({
        "usuario": usuario,
        "mensaje": mensaje,
        "respuesta": f"Aurora ha recibido tu mensaje simbólico: '{mensaje}'"
    })

if __name__ == "__main__":
    app.run(debug=True, port=int(os.getenv("PORT", 3000)))
