function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementAux = [];

  for (let i = 0; i < numeros.length; i++) {
    if (elementAux.includes(numeros[i])) {
      return numeros[i];
    } else {
      elementAux.push(numeros[i]);
    }
  }
}
  // numeros.forEach(num => {
  //   if (!(elementAux.includes(num))) {
  //     elementAux.push(num);
  //   } else {
  //     return num;
  //   }
  // });

module.exports = encontrarElementoRepetido;