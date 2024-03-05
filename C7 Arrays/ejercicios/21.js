function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  if (!array.includes("Enero", "Marzo", "Noviembre")) return "No se encontraron los meses pedidos";
  
  let resultado = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] === "Enero"){
      resultado.push(array[i]);
    } else if (array[i] === "Marzo"){
      resultado.push(array[i]);
    } else if (array[i] === "Noviembre"){
      resultado.push(array[i]);
    }
  }
  return resultado;
}

module.exports = mesesDelAño;
