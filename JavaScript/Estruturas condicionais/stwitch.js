const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra') // entra nessa linha de código tanto se o case for 10 ou 9
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4: 
            console.log('Recuperação')
        case 3: case 2: case 1: 
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')

    }
}

imprimirResultado(10)
imprimirResultado(2)
imprimirResultado(6)
imprimirResultado(11)