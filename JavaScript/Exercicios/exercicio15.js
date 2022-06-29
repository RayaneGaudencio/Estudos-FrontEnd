// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

const array = [1, 2, 3, 4]
const array2 = [2, 3, 4, 5]

let filtraValorPar = (valor, indice) => valor%2 == 0 && indice%2 == 0

console.log(array.filter(filtraValorPar))
console.log(array2.filter(filtraValorPar))