const prod1 = {} 
prod1.nome = 'teste' // atribuindo valor a um objeto vazio
prod1.preco = 2090.90

prod1['teste 2'] = 0.42 // evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'camisa',
    preco: 79.90,
    obj: {
        bjs: 1,
        obj2: {
            ssk: 3
        }
    }
} // vários objetos dentro de um único identificador 
console.log(prod2)

