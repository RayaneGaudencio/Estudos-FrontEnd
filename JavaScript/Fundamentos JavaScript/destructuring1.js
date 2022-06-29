// novo recurso do ES2015
// pega elementos de uma estrutura

// exemplo de desestruturação em objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade : i } = pessoa // atribui nomes a constante
console.log(n, i)

const { sobrenome, bemHumorada = true /*se nao existir esse atributo recebe o valor true*/ } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num }} = pessoa não dá pra desestruturar dados aninhados que não existam