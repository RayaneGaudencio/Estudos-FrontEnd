const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Objeto é uma função chave/valor
console.log(Object.keys(pessoa)) // pega as chaves do objeto
console.log(Object.values(pessoa)) // pega os valores
console.log(Object.entries(pessoa)) // recebe uma quantidade de arrays com chave e valor equivalente ao que tem dentro do objeto, envolvidos em uma array

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// outra forma de fazer 
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) // utilizando o operador desctructuring
})


// definir algumas caracteristicas da propriedade 
// nome da propriedade tem que estar entre aspas, porque senão o javascript interpreta como se essa propriedade já existisse
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // passivel ser listada (ex: quando fizer pessoa.dataNascimento) 
    writable: false, // se pode ser ou não alterada
    value: '01/01/2003'
})

pessoa.dataNascimento = '01/01/2019' // propriedade não aceita ser reescrita
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } 
const obj = Object.assign(dest, o1, o2)
// 'concatena' os outros parametros que foram adicionados à const 'destino' 
// como o valor 'a' já existia, ele é reescrito

console.log(dest)
Object.freeze(obj)
obj.c = 1234 // como 'c' foi congelado não mostra a 'alteracao'
console.log(obj)