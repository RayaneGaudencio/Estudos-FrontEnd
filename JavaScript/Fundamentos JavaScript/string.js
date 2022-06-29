const nome = "rayane"
console.log(nome.charAt(4))

console.log(nome.charCodeAt(3)) 

console.log(nome.indexOf(3)) // dando erro

console.log(nome.substring(2))

console.log(nome.substring(0,3))

// CONCATENAÇÃO

console.log('Olá '.concat(nome).concat("!")) 

console.log('Olá '+nome+"!")

//REGEX

console.log(nome.replace('a', 3)) // ERRO

console.log(nome.replace(/\d/, 'e'))

console.log(nome.replace(/\w/g, 'e'))

// TEMPLATE STRING 

const contatenacao = 'olá ' + nome + '!'
console.log(contatenacao)

const template= ` 
Olá 
${nome}`
console.log(template) // considera a quebra de linhas

console.log(`1 + 1 =  ${1 + 1}`) // pode fazer cálculos