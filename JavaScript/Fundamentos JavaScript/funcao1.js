// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3) // retorna a soma dos dois
imprimirSoma(2) // undefined
imprimirSoma(2, 3, 4, 5, 6, 7) //retorna o resultado da soma das duas primeiras

//Funcao com retorno

function soma(a, b = 1) {
    return a + b 
}
console.log(soma(2, 3)) // nesse caso atribuiu-se 3 a b
console.log(soma(2)) // passou só um parâmetro, mas como o valor de b foi definido ele soma 2 + 3

