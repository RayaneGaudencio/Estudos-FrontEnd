// a herança é um pouco diferente em Class

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // referencia a Class Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
const pai = new Pai 
const avo = new Avo
console.log(filho)
pai.sobrenome = "Oliveira"
console.log(pai)
console.log(avo)