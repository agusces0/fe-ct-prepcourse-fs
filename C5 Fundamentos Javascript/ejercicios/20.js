function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código

  var vocales = "a e i o u"
  var error = "Dato incorrecto"
  var correcto = "Es vocal"

  if (letra.length > 1) {
    return error;
  } else if (!vocales.includes(letra)) {
    return error;
  } else {
    return correcto;
  }
}

module.exports = esVocal;
