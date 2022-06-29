let valor // declarado mas não foi inicializado
console.log(valor)

valor = null // não recebe nenhum valor, e não aponta pra nenhum endereço de memória
// mas ela foi definida 

console.log(valor)
//console.log(valor.toString()) // não tentar acessar dados de uma variável nula

const produto = {} // constante foi definida 
console.log(produto.preco) // retorna undefined pois não consegue localizar o preco, mas 
// como a produto foi definida, mesmo vazia, o programa não dá erro

// console.log(produto.preco.a) erro

produto.preco = 5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
// isso não vai fazer com que o objeto deixe de ter o atributo
// delete produto.preco - assim consegue se deletar o atributo, retornando um objeto vazio
console.log(!!produto.preco)
console.log(produto)

delete produto.preco 
console.log(produto)

// produto.preco = null // sem preço