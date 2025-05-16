
const { getModo } = require('./contexto-modos');

function obtenerContextoDesdeMensaje(usuario) {
  const datos = getModo(usuario);

  return {
    canal: usuario,
    modo: datos.modo || "default",
    descripcion: datos.descripcion || "sin descripción",
    actualizado: datos.actualizado || "N/A"
  };
}

module.exports = obtenerContextoDesdeMensaje;
