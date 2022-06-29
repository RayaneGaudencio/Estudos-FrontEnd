// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function repete(numero) {
    let quantidade = ''

    for(let i = 0; i < numero; i++) {
        quantidade += '+'
    }
    return quantidade

}

console.log(repete(5))