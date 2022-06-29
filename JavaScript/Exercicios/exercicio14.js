// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({produto: 'shampoo', marca: 'pantene'}))
