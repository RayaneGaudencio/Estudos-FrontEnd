// principio da OO em que os filhos ganham caracteristicas do pai
// tem o intuito de reutlizar codigos
// prototipo: hierarquia de objetos
// o atributo prototype só está dentro da função

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


console.log(ferrari.prototype) // como o prototipo está apenas em funções e ferrari é um objeto, retorna undefined
console.log(ferrari.__proto__) // se tentar encontrar algum atributo dentro de ferrari e não encontrar vai buscar na cadeia de prototipos 
console.log(ferrari.__proto__ === Object.prototype) // um objeto criado por padrão aponta pra Object.prototype (que é uma função)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof meuObjeto, typeof Object)
console.log(Object.prototype, meuObjeto.prototype)