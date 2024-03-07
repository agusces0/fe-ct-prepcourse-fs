/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arr = [];
  for (const key of Object.keys(objeto)) {
    arr.push([key, objeto[key]]);
  }
  return arr;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    let key = string.charAt(i);
    if (obj.hasOwnProperty(key)){
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  return obj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let upperCaseLetters = [];
  let lowerCaseLetters = [];

  for (let char of string) {
    if (char === char.toLowerCase()) {
      lowerCaseLetters.push(char);
    } else {
      upperCaseLetters.push(char);
    }
  }

  return upperCaseLetters.join('') + lowerCaseLetters.join('');
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let words = frase.split(' ');

  for (let i = 0; i < words.length; i++){
    let splitWord = words[i].split('');
    let reverseWord = splitWord.reverse();
    words[i] = reverseWord.join('');
  }

  return words.join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let splitNum = numero.toString().split('');
  let reverseNum = splitNum.reverse();
  let finalNum = reverseNum.join('');

  if (numero == finalNum){
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let result = "";
  for (let i = 0; i < string.length; i++){
    let char = string.charAt(i);
    if (char !== "a" && char !== "b" && char !== "c"){
      result += char;
    }
  }
  return result;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  function compareSize(a, b){
    return a.length - b.length;
  }
  return arrayOfStrings.sort(compareSize);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arr = [];

  if (array1 > array2){

    for (let i = 0; i < array1.length; i++){
      let num = array1[i];
      if (array2.includes(num)){
        arr.push(num);
      }
    }
  } else {

    for (let i = 0; i < array2.length; i++){
      let num = array2[i];
      if (array1.includes(num)){
        arr.push(num);
      }
    }
  }
  return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
