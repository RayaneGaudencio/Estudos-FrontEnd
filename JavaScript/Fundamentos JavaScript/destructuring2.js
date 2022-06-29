// Exemplo de desestruturação em array 

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // recebe os valores dessa array que foi criada

console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 'pegue aqui', 8]]
console.log(nota)