// cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0' // não é recomendado 
const avo = { attr1: 'A' } // tem como prototipo o Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // tem como prototipo o avo 
const filho = { __proto__: pai, attr3: 'C'} // tem como prototipo o pai

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) 
// se houver um atributo em um protótipo anterior ele não procura mais na cadeia

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing: sobrescreve o que está no prototipo pai
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    } // super é utilizado para referenciar o metódo do prototipo pai
}

Object.setPrototypeOf(ferrari, carro) // estabelece a relação entre ferrari e carro (ferrari terá carro como seu ptototipo)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status())
console.log(volvo.status())

volvo.acelerarMais(100) // chamou um metódo de seu protótipo
console.log(volvo.status())

ferrari.acelerarMais(200)
console.log(ferrari.status())