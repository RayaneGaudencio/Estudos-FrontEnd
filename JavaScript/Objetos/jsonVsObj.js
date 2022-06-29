// JSON é um formato de dados
// serve para comunicar sistemas feitos em tecnologias diferentes
// formato textual 
// simples de ser interpretado

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)) // não mostra a função

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
// console.log(JSON.parse({ 'a': 1, 'b': 2, 'c': 3}))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // objeto gerado a partir de um texto

// valores suportados no JSON
console.log(JSON.parse('{ "a": 1.8, "b": "string", "c": true, "d": {}, "e": [] }')) // string deve ta entre aspas duplas