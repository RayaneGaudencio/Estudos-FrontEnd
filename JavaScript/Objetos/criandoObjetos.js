// usando notação literal 
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes construtoras 
function Produto(nome, preco, desc) {
    this.nome = nome // tornando a variavel visivel para fora
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) // preco e desc não estão disponíveis pra fora do objeto
    }
}

// criando novos objetos a partir de  uma função construtora
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2000.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao factory (padrao de projeto) 
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,

        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7000, 4)
const f2 = criarFuncionario('Maria', 11.000, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create 
const filha = Object.create(null) // prototype nulo 
filha.nome = 'ana'
console.log(filha)


// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJSON.info)