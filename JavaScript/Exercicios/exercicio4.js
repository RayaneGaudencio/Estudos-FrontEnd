// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

function verificaMes(mes) {
    
    if(mes == 1) {
        return `O mês ${mes} é Janeiro.`
    } else if(mes == 2) {
        return `O mês ${mes} é Fevereiro.`
    } else if(mes == 3) {
        return `O mês ${mes} é Março.`
    } else if(mes == 4) {
        return `O mês ${mes} é Abril.`
    } else if(mes == 5) {
        return `O mês ${mes} é Maio.`
    } else if(mes == 6) {
        return `O mês ${mes} é Junho.`
    } else if(mes == 7) {
        return `O mês ${mes} é Julho.`
    } else if(mes == 8) {
        return `O mês ${mes} é Agosto.`
    } else if(mes == 9) {
        return `O mês ${mes} é Setembro.`
    } else if(mes == 10) {
        return `O mês ${mes} é Outubro.`
    } else if(mes == 11) {
        return `O mês ${mes} é Novembro.`
    } else if(mes == 12) {
        return `O mês ${mes} é Dezembro.`
    } else {
        return `Digite um número válido.`
    }
}

console.log(verificaMes(1))
console.log(verificaMes(13))
console.log(verificaMes(4))

function verificaMes2(mes) {
    switch(mes) {
        case 1: return `O mês ${mes} é Janeiro.`
        case 2: return `O mês ${mes} é Fevereiro.`
        case 3: return `O mês ${mes} é Março.`
        case 4: return `O mês ${mes} é Abril.`
        case 5: return `O mês ${mes} é Maio.`
        case 6: return `O mês ${mes} é Junho.`
        case 7: return `O mês ${mes} é Julho.`
        case 8: return `O mês ${mes} é Agosto.`
        case 9: return `O mês ${mes} é Setembro.`
        case 10: return `O mês ${mes} é Outubro.`
        case 11: return `O mês ${mes} é Novembro.`
        case 11: return `O mês ${mes} é Dezembro.`
        default: return `Digite um número válido.`
    }
}  

console.log(verificaMes2(1))
console.log(verificaMes2(13))

function verificaMes3(mes) {
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `Este mês é ${mapeamento[--mes]}.`
}

console.log(verificaMes3(2))