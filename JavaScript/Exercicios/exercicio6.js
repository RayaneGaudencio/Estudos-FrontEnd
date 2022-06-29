// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

function inverter (param) {
    let tipo = typeof param

    if(tipo == "boolean") return !param 
    else if(tipo == "number") return !param
    else return `Booleano ou número esperados, mas o parâmetro é do tipo ${tipo.toLocaleUpperCase()}.`
}

console.log(inverter(true))
console.log(inverter(200))
console.log(inverter("122"))