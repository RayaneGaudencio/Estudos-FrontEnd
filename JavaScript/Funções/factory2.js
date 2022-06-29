function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 
    }
}

console.log(criarProduto('Notebook', 2199.49)) // criando um novo objeto através dos parametros padrões da factory