function MeuObjeto() {} // função construtora

const obj1 = new MeuObjeto /// instanciando um novo objeto a partir da função construtora
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // objetos criados a partir de uma função construtora: são um mesmo prototype 
console.log(MeuObjeto.prototype === obj1.__proto__) // seus protoypes apontam para o prototype da função construtora

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // não precisa usar o setPrototypeOf

obj2.nome = 'Ana' // nome ao objeto 2, sobrescreve o 'anônimo'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // saindo de Object.prototype para apontar pro protoype de 'MeuObjeto'
obj3.nome = 'Obj3'
obj3.falar()

// acertivas
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // a função também tem .__proto__ que aponta pra Function.prototype
console.log(Function.prototype.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__ === null)