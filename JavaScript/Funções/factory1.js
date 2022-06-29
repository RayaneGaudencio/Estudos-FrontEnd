// Função factory retorna um objeto, fabrica uma instância de um objeto 

// Factory simples 
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())