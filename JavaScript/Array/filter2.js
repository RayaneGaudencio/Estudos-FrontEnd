// Criando o próprio filter

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// filtrar os mais caros, e os produtos fragéis 

let filtroCaros = produto => produto.preco >= 500
let fragil = produto => produto.fragil

console.log(produtos.filter2(filtroCaros).filter2(fragil))