function nomeDaVariavel (parametros) {

}

const amarzenandoNaVariavel = function() {
    
}

// const amarzenandoNaVariavel() invoca a função

const nomeArray = [function (a, b) {return a + b}, nomeDaVariavel, amarzenandoNaVariavel]

console.log(nomeArray[0](2, 3)) // pega o primeiro item da array e adiciona os parametros 2 e 3

const objeto = {} // cria um objeto vazio
objeto.falar = function () {return 'Oi'} // adiciona propriedades ao objeto, em forma de função
console.log(objeto.falar())

function run(fun) {
    fun()
}

run(function () {console.log('executando...')})

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) // retornando a função ou
const cincoMais = soma(2, 3)
cincoMais(4) // retorna a mesma coisa 


function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido ${area}m2`)
    } else {
        return area
    }
}

area(20, 15)

// parametros variáveis
function somandoArguments() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i] // pega todos os itens e soma
    }
    return soma
}

console.log(somandoArguments(1))
console.log(somandoArguments(1.1, 2.3, 3.4)) // pode passar parâmetros variáveis
console.log(somandoArguments('teste 1', 'teste 2')) // apenas concatena

