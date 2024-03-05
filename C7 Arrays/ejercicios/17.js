function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sum = 0;
  arrayOfNums.map(num => sum += num);
  return sum;
}

module.exports = agregarNumeros;
