function Pessoa(nome){
    this.nome = nome
}

const p1 = new Pessoa('Rayane')
console.log(p1.nome) // this vai estar associado a essa nova estância que foi criada 