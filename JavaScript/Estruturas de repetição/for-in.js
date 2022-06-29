// itera em cima de indices 

const notas = [3.2, 5.4, 6.7, 3.6]

for (i in notas) {
    console.log(`${i}: ${notas[i]}`)// se colocar apenas o [i] não acessa o conteúdo do índice 
} // acessa os índices da array

const pessoa = {
    nome: "ana",
    sobrenome: "silva",
    idade: 28,
    peso: 76
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
console.log(atributo)