// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repete(param1, param2) {
    const array = []
    
    for(let i = 0; i < param2; i++) 
    array.push(param1)
    
    return array
}

console.log(repete(1, 5))
console.log(repete("Carregando...", 5))

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
    }
console.log(repetir(1, 4))