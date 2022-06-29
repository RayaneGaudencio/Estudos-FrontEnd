function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // passando sem os nomes do parametro
console.log(rand([992])) // apenas o primeiro parametro
console.log(rand([, 200])) // apenas o segundo parametro
console.log(rand([])) // parametro vazio, considera os padroes