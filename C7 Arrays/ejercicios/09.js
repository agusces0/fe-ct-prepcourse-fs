function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let random = Math.round(Math.random() * (array.length - 1));
   return array[random];
}

module.exports = obtenerElementoAleatorio;
