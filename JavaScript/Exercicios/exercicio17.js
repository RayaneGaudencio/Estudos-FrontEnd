// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.


const arrayNumeros = [1, 2, 3, 4, 5]
const resultado = (total, atual) => total + atual


console.log(arrayNumeros.reduce(resultado))
