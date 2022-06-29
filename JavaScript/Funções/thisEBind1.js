const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // mostra o que está em saudacao
const falar = pessoa.falar // armazenou a funcao na constante
falar() // conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()