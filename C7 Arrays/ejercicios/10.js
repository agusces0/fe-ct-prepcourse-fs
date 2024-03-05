function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var resultado = array.filter((word) => word.length > 5);
  return resultado;
}

module.exports = obtenerPrimerStringLargo;
