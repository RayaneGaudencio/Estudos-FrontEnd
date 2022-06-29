/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function formulaBhaskara (a, b, c){
    const resultado1 = (-b + Math.sqrt((b**2) - (4*a*c) / (2*a)))
    const resultado2 = (((2*a) / (-b - Math.sqrt((b**2) - (4*a*c)))
    this.primeiroResultado = console.log(`Resultado de X1: ${resultado1}`)
    this.segundoResultado = console.log(`Resultado de X2: ${resultado2}`)
}
formulaBhaskara(2, 9, 7)

// let a = 3
// let b = -5
// let c = 12
// let soma = Math.sqrt((b**2) - (4*a*c) / (2*a))
// console.log(soma)




