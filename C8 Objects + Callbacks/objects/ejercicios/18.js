function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  arr = objetoUsuario.amigos;
  arr.push(nuevoAmigo);
  
  objetoUsuario.amigos = arr;

  return objetoUsuario;
}

module.exports = agregarAmigo;
