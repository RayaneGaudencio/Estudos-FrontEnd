class Pessoa {
    constructor(nome) {
        this.nome = nome // variável passa a ser pública por conta do this
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João') // instanciou uma nova função 
p1.falar() // se fizer isso no browser o this vai variar e vai mostrar undefined, isso não acontece na função factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // não precisa utilizar o this, pois ele sabe no contexto no qual foi criado 
    }
}

const p2 = criarPessoa('João')
p2.falar() // não importa por onde esteja sendo chamada a função, ela sempre vai apontar pro lugar certo