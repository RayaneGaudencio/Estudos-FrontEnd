function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(0, 0, 0))
// retorna falso e não funciona


// estratégia 2, 3 e 4
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
}

// valor padrão do es2015
function soma3(a = 1, b = 2, c = 1) {
    return a + b + c 
}

console.log(soma3(3), soma3(2,1), soma3(0))