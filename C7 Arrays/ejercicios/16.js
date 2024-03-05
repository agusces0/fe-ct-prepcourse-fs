function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map(function (element, index) {
    return element * index;
  });
}

module.exports = multiplicarElementosPorIndice;
