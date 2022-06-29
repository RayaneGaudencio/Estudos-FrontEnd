// destructuring como parâmetro padrão

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40} // armazenou os parametros no objeto 
console.log(rand(obj)) 
console.log(rand({min: 955})) // passando apenas um parametro
console.log(rand({})) // parâmetro vazio 
// console.log(rand()) isso não pode ser feito