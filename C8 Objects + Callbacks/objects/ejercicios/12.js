function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  if (typeof objetoMisterioso === 'object' && objetoMisterioso.hasOwnProperty('numeroMisterioso')){
    return objetoMisterioso.numeroMisterioso * 5;
  } else {
    return error;
  }
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
