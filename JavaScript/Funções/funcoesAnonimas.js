// funcoes sem nome, armazenada em variáveis

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(5, 2, function (x, y) { // isso acontece muito
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) // armazenando uma arrow function em uma outra 

const pessoa = {
    falar: function /*pode retirar o function*/ () {
        console.log('OPA')
    }
}

pessoa.falar()