// Array em JavaScript é um objeto, pois o JS não tem o array como um tipo de dado 
// Estrutura indexada que começa com 0 
// cresce e diminui dinamicamente
// estrutura heterogenea: aceita diferentes tipos de dados, mas para boa prática, trabalhar apenas com um tipo de dado

// *****Criar Array's com const não quer dizer que elas não vão se alterar, apenas que aponta para o mesmo endereço de memória*****

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma não recomendada 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // acessa o primeiro elemento
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined

aprovados[3] = 'Paulo' // forma válida para adicionar elemento, mas é mais comum usá-la para substituir um elemento que já existe
aprovados.push('PAULO') // mais apropriado para adicionar itens a uma array
console.log(aprovados[3])
console.log(aprovados[4])

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)

console.log(aprovados.sort()) // em ordem alfabética

delete aprovados[0] // quando delete um item, o indice dos outros não se altera
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // a partir do indice do Carlos exclui dois elementos e adicionar 2
console.log(aprovados)
aprovados.splice(1, 0, 'Mais um entre eles') // adiciona um elemento após o elemento 1
console.log(aprovados)
