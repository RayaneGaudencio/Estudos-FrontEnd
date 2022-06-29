// Usado para filtrar um array 
// O array criado não necessariamente terá o mesmo tamanho do array original
// recebe 3 parametros: o item, o indice e o array

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

// filtrar os mais caros, e os produtos fragéis 

let filtroCaros = produto => produto.preco >= 500
let fragil = produto => produto.fragil

console.log(produtos.filter(filtroCaros).filter(fragil))