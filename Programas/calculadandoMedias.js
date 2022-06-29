let notasDoAluno = [10, 9, 5, 4.5]

function calcularNotas() {
    let somaNotas = 0;
    let mediaDoAluno = 0;   
    for (let i = 0; i < notasDoAluno.length; i++) {
    somaNotas += notasDoAluno[i]
}
    mediaDoAluno = somaNotas / notasDoAluno.length
    return (`A média do aluno é ${mediaDoAluno}`)
}

console.log(calcularNotas(notasDoAluno))



