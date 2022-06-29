function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3000,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1 // sem esses dois retorna NaN
console.log(getPreco())
console.log(produto.getPreco()) // chamando a função a partir de um objeto

const carro = { preco: 5000, desc: 0.20 }

console.log(getPreco.call(carro)) // getPreco passa a apontar para carro  // ou
console.log(getPreco.call(carro, 0.17, '$'))// nesse caso é passado o contexto e os parametros da função getPreco


console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$'])) // parâmetros dentro de uma array 