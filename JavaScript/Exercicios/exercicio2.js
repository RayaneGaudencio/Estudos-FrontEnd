// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

function verificaIdade(idade) {
    let idadeEmDias = idade * 365
    return `A sua idade é ${idadeEmDias}, em dias.`
}

console.log(verificaIdade(10))