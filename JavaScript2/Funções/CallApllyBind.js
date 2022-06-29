const jogo = {
    nome: 'GTA',
    ano: 2020,
    
}

const carro = {
    nome: 'Toyota',
    ano: 1994,

    mostrarNome() {
        console.log(this.nome) // quando chamada, aponta para o contexto no qual foi criada. Retorna 'Toyota'
    },

    trocarAno(ano) {
        this.ano = ano
    }

}

carro.mostrarNome() // vinculação implicita a carro
carro.mostrarNome.call(jogo) // o this passa a apontar para o objeto jogo // vinculação explicita para jogo


carro.trocarAno(1998) // era 1994 passa a ser 1998
console.log(carro.ano)

carro.trocarAno.call(jogo, 2021) // primeiro mostrou o destino, depois adicionou o novo atributo
console.log(jogo.ano)

// O apply é utilizado pra passar vários argumentos dentro de um vetor
carro.trocarAno.apply(jogo, [2021])
// Apply permite pegar um metódo de um objeto e vincular a um outro objeto 

const trocarAnoDoJogo = carro.trocarAno.bind(jogo, 2025) // bind cria um novo metódo com o método de outra função

trocarAnoDoJogo()
console.log(jogo.ano)