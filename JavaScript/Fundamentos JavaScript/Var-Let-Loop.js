for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i=', i) // var é mostrada fora do bloco, pois não tem escopo de bloco

for (let a = 0; a < 10; a++) {
    console.log(a)
}
// console.log(a) a variável let não está visível fora do bloco, pois tem escopo de bloco



const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() { // toda vez que var der uma volta, atribui um novo valor a array
        console.log(i)
    })
}
funcs[2]()
funcs[8]() // imprime em todas situações o valor 10 **COM LET ISSO NÃO ACONTECE**