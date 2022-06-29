const valores = [7.7, 9.9, 8.7, 8.3]
console.log(valores)
console.log(valores[0], valores[3]) // acessa o índice 0 e o 3
console.log(valores [4]) // retorna undefined, pois o índice 4 não existe

valores[10] = 10 // atribui o valor 10 ao décimo item
console.log(valores)

console.log(valores.length) // quantos itens tem numa array

valores.push(false, null, 'teste') // adiciona itens a array **não é uma boa prática adicionar itens de diferentes tipos**
console.log(valores)

console.log(valores.pop()) // retira o último item da array

console.log(valores.shift()) // retira o primeiro item da array
console.log(valores) // array sem o último item 

console.log(valores.unshift("unshift")) // adiciona um item no inicio da array

delete valores [2] // deleta o segundo índice da array 
console.log(valores) 

console.log(valores.includes(8.3)) // verifica se na array tem esse valor 

console.log(typeof valores) // tipo object 