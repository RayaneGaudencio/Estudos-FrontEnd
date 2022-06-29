// array original não é modificado 

const filhas = ['Valesca', 'Ana']
const filhos = ['Pedro', 'Joao']
let todos = filhas.concat(filhos)

todos = filhas.concat(filhos, 'Henrique') // adicionando um outro item

console.log(todos, filhas, filhos)

console.log([0].concat([1, 2], [3, 4], 5, [[6, 7]]))