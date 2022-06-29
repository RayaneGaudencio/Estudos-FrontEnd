const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o último item
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na última posição
console.log(pilotos)

pilotos.shift() // retira o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no inicio
console.log(pilotos)

// splice pode adicionar e remover

pilotos.splice(2, 0, 'Bottas', 'Massa') // no indice dois adiciona sem remover nenhum outro elemento 
// **** o primeiro argumento é a posição, e o segundo é quantos elementos serão excluídos depois dele ****
console.log(pilotos)

pilotos.splice(3, 1) // remove o item do indice 3
console.log(pilotos)

// ====== slice retorna um novo array ======

const algunsPilotos = pilotos.slice(2) // cria um novo array com elementos a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // pega o indice um ao 3
console.log(algunsPilotos2)