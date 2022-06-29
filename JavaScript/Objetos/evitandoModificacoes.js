// Object.preventExtensions
//não permite adcionar atributos, mas permite retirar

const produto = Object.preventExtensions({
    nome : 'QUALQUER', preco: 1.999, tag: 'promoção'
})
console.log('Extensive', Object.isExtensible(produto)) // verifica se pode adicionar atributos
produto.nome = 'borracha'
produto.descricao = 'Borracha escolar branca' // não dá erro, mas não adciona uma novo metódo 
delete produto.tag // pode excluir 
console.log(produto)

// Object.seal
// não pode adicionar, excluir, mas pode modificar valores dos atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa)) // confere se está selado 

pessoa.sobrenome = 'Silva' // não tem esse atributo nem vai adicionar
delete pessoa.nome // não pode deletar
pessoa.idade = 29 // pode alterar valores dos atributos
console.log(pessoa)

// Object.freeze = selado + constante 

