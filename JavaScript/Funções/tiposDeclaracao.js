console.log(soma(3, 4))

// Function declaration 
function soma(x, y) { // nessa, a função pode ser chamada antes, nas demais não
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x + y
}

// Named Function expression
const mult = function mult (x, y) {
    return x + y
} // pouco utilizada, mas boa para debugar 