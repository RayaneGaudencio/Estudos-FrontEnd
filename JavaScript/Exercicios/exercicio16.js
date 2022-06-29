 // Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400. Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

let bissextoOuNao = function (ano) {
    if((ano % 4  == 0 && !(ano % 100 == 0)) || (ano % 400 == 0)) {
        console.log(`${ano} é um ano bissexto.`)
    } else {
        console.log(`${ano} não é um ano bissexto.`)
    }
}

bissextoOuNao(2020)
bissextoOuNao(2100)
