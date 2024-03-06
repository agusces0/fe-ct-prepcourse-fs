function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   arr = []
   for (i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].charAt(0).toLowerCase() === 'a'){
         arr.push(arrayOfStrings[i])
      }
   }
   return arr;
}

module.exports = filter;
