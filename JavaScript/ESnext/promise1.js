let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Sarah']) // valor passado quando a promessa é cumprida ** só pode passar um único valor, se quiser fazer isso o valor terá que ser passado em um objeto ou um array
})

// para acessar o valor que foi gerado
// função é chamada no momento que a promessa for cumprida
p.then(function(valor) {
    console.log(valor)
})

// then pode ser chamado várias vezes 
// o resultado de um metódo then é passado para outro
// pode ser passado como parametro uma função 
// ex: 
function primeiroIndice(array) {
    return array[0]
}
function primeiraLetra(primeiroIndice) {
    return primeiroIndice[0]
}

function letraMinuscula(primeiraLetra) {
    return primeiraLetra.toLowerCase()
}

// pode estar abaixo da função da promessa sem precisar do 'p'
p
    .then(primeiroIndice) // pegará apenas o primeiro indice e a próxima retornará apenas ele
    .then(primeiraLetra) // pega apenas a primeira letra
    .then(letraMinuscula)
    .then(console.log) // colocando apenas o console.log já retorna, pois o then aceita apenas um parametro  

