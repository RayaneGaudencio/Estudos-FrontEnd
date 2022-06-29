function quatroOperacoes (a = 11, b = 6) {

    console.log(`A soma de a + b é ${a + b}`)
    console.log(`A subtração entre a e b é ${a - b}`)
    console.log(`A multiplicação entre a e b é ${a * b}`)
    let divisao = a/b
    divisao = Math.ceil(divisao)
    console.log(`A divisão entre a e b é ${divisao}`)
}

quatroOperacoes()