// Operador rest(juntar)/spread(espalhar)
// usar rest como parametro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 1248.99 }
const clone = { ativo: true, ...funcionario} // espalhou todos atributos de funcionario dentro do clone
console.log(clone)


// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Bia']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)

// rest em função 
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 4, 5)) // pode passar parametros variaveis