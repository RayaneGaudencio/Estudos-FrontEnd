function resultado(nota) {
    if(nota >= 7) {
        console.log("Você está aprovado   " + nota)
    }
}
// bloco só irá acontecer se a nota for maior ou igual a 7
resultado(8) // só retorna esse valor
resultado(5)

function resultado2(valor) {
    if(valor) { // pode passar algo que não é boolean, se o valor for verdadeiro ele retorna
        console.log('VERDADE...' +valor)
    }
}

resultado2(!!1)

function teste1(num) {
    if(num > 7) {
    console.log(num) // // é recomendado utilizar sempre chaves, mesmo quando houver apenas uma única sentença 
    console.log('Final') // se não houver a abertura de chaves apenas a primeira será considerada dentro de if, 
    }                   // e a segunda será mostrada independente do resultado
}
teste1(8) // o programa retorna final independente do valor
teste1(6) // pois 'Final' não está associado ao if

function teste2(num) {
    if(num > 7) ; { 
        console.log(num) // não utilizar ponto e vírgula, pois ele não considera o que está dentro do bloco
    }
}
teste2(6) 
teste2(8) // imprime os dois valores, pois o bloco não está associado ao if por conta do ( ; ) 