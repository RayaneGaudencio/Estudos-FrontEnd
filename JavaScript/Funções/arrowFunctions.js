let dobro = function (a) {
    return 2 + a
}

// função arrow
dobro = (a) => {
    return 2 + a
}

// retorno implícito 
dobro = a => 2 + a
console.log(dobro(Math.PI).toFixed(2))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // possui um parâmetro, mas não é passado
ola = _ => 'Olá' // pouco utilizado