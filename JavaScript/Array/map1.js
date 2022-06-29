// serve para transformar um array
// **O novo array deve ter o mesmo tamanho do array original**
// map não transforma um array atua

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2 // multiplica todos itens do array por 2
})

console.log(resultado)

// podemos ir alterando o conteúdo a partir de um conteúdo gerado anteriormente
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
