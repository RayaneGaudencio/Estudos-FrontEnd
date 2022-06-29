// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

function retornaPrimeiroEUltimo(array) {
    let primeiroItem = array.shift()
    let ultimoItem = array.pop()

    return `Primeiro item da array: ${primeiroItem}. Último item da array: ${ultimoItem}.`
}

console.log(retornaPrimeiroEUltimo(["1", "2", "3", "4", "5"]))
console.log(retornaPrimeiroEUltimo(["Ana", "Paula", "Ricardo", "Luciana"]))