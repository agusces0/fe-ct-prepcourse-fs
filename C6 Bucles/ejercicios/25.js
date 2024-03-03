function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   // Eliminamos espacios y convertimos a minúsculas para hacer la comparación sin ser case-sensitive
   var strSinEspacios = string.replace(/\s/g, '').toLowerCase();
    
   // Invertimos el string para comparar
   var strInvertido = strSinEspacios.split('').reverse().join('');
   
   // Comparamos el string original con su versión invertida
   return strSinEspacios === strInvertido;
}

module.exports = esPalindromo;
