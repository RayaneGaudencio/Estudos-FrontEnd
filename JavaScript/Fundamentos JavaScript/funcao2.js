// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a+ b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável 
const soma = (a, b) => { /// => substitui o nome function
    return a + b
}

console.log(soma(2,3))

// Retorno implícito 
const subtracao = (a, b) => a - b // realiza o return sem precisar usar a palavra return
console.log(subtracao(2, 3))
