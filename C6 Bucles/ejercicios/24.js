function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   var largo = texto.length;
   var i = texto.length;
   var contador = 0;
   var resultado = "";

   do {
      resultado = resultado + texto.charAt(i);
      i--;
      contador++;
   } while (contador <= largo)

   return resultado;
}

module.exports = invertirTexto;
