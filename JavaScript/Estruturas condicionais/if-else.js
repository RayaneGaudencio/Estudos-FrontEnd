const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
} 
imprimirResultado(8) // retorna aprovado
imprimirResultado(4) // retorna reprovado
imprimirResultado('OBS') // tomar cuidado 