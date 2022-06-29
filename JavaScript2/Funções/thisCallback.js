const pessoa = {
    nome: "ANA",
    jogos:['GTA', 'ZELDA', 'PES'],

    mostrarJogos(){ // this aponta pro objeto global no callback
        let that = this // 1a opção: salvando a referência do this 
        this.jogos.forEach(function(jogo){
            console.log(that.nome, jogo) // o nome retorna undefined
        }, this) // 2a opção: objeto de referência pro this 
    }
}
pessoa.mostrarJogos()

// não é necessário fazer isso na arrow function, pois ela se associa aos último elementos antes dela

const pessoa2 = {
    nome: 'Rayane',
    caracteristicas: ['bonita', 'charmosa', 'cheirosa'],

    detalhesPessoa() {
        this.caracteristicas.forEach(detalhes => console.log(this.nome, detalhes))
    }
}

pessoa2.detalhesPessoa()

