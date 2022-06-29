Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Testando')
    } else if (nota.entre(7, 8.99)) {
        console.log('teste 2')
    } else {
        console.log('teste 3')
    }
}

imprimirResultado(10)
