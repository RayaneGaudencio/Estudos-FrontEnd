// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

function removerPropriedade(objeto, nomePropriedade) {
    const copia = Object.assign({}, objeto) // assign cria uma copia do objeto
    delete copia[nomePropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2, c: 3}, "a"))

function removerPropriedade2(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
}
    

