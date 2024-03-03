function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (!(fecha instanceof Date)) {
    return false;
  } 
  
  return !isNaN(fecha.getTime());
}

module.exports = esFechaValida;