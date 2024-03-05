function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    promedio += resultadosTest[i];
  }
  return promedio / resultadosTest.length;
}

module.exports = promedioResultadosTest;
