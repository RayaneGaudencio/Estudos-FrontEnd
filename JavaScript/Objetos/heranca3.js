const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

// Object.create() define que o prototipo é o objeto que passou como parametro 
const filha1 = Object.create(pai) // pai como prototipo
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'carla' // tenta mudar o valor que não pode ser alterado
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // não lista atributos por herança
console.log(Object.keys(filha2))

for (let key in filha2) {
    console.log(key) // mostra os atributos por herança
}

for(let key in filha2) { 
    filha2.hasOwnProperty(key) ?  // para saber se a propriedade pertence a ela 
    console.log(key) : console.log(`Por herança: ${key}`)
}