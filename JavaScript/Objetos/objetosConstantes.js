// pessoa aponta pra um endereço de memória 
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'

// tentando redirecionar o endereço de memória de pessoa
// pessoa = { nome: 'Ana' } dá erro

Object.freeze(pessoa) // congelando o objeto pessoa, não consegue mexer no objeto (alterar, adicionar ou excluir) // torna o objeto constante

pessoa.nome = 'Maria' // não dá erro, mas não consegue mudar
console.log(pessoa.nome) // retorna 'Joao'

const pessoaConstante = Object.freeze({ nome: 'Joao', numero: 99222.3456})
console.log(pessoaConstante)

