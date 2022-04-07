// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

function cortaPorAqui(corteIzq, corteDer, array) {
    // findIndex solo pilla funciones
    let indiceIzq = array.findIndex((x) => x == corteIzq);
    // Buscame el indice de la palabra x en todo el array, x es igual a lo que te paso como corteIzq

    let indiceDer = array.findIndex((x) => x == corteDer);
    // Buscame el indice de la palabra x en todo el array, x es igual a lo que te paso como corteDer

    return array.slice(indiceIzq, indiceDer + 1);
    // Corta el array que te paso por el indice de corteIzq y el indice de corteDer+1 (para incluir esa palabra)
}

/**
 * Utiliza de manera combinada y adecuadamente el método .findIndex y .slice para 'cortar' un array entre dos elementos. Para simplificar, el primer animal siempre está 'a la izquierda' del segundo animal por el que queremos cortar
 */

let animales = ["Elefante", "Tigre", "Leopardo", "Ñu", "Pantera"];

console.log(cortaPorAqui("Elefante", "Leopardo", animales)); // ["Elefante", "Tigre", "Leopardo"]
console.log(cortaPorAqui("Tigre", "Ñu", animales)); // ["Tigre", "Leopardo", "Ñu"]

//

