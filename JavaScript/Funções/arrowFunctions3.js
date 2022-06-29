let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(globalThis)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(globalThis) // retorna false pois this foi 'amarrado' ao objeto com o bind
comparaComThis(obj) // true pois o objeto agora está ligado ao objeto

let comparaComThisArrow = param => console.log(this === param)
// função arrow não aponta pro global, mas função normal sim
comparaComThis(globalThis)
comparaComThis(module.exports) // acessa se é o this no nodejs

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) 
// retorna false
// arrow function é mais forte que bind