function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let strChars = str1.length + str2.length + str3.length;
   let strCombined = "";
   let i = 0;

   while (i <= strChars) {

      strCombined = strCombined + str1.charAt(i);
      strCombined = strCombined + str2.charAt(i);
      strCombined = strCombined + str3.charAt(i);
      i++
   }
   return strCombined;
}

module.exports = combine;
