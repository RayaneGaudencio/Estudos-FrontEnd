// simplesmente percorre o array
// três parâmetros: conteúdo da array, indice e o próprio array (nessa ordem)
// retorna todos elementos sem nenhum filtro

const aprovados = ["Zendaya", "Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function(nome, indice) { // A função será chamada em cada item do array (função callback)
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // tem acesso apenas ao conteúdo 

const exibirAprovados = aprovado => console.log(aprovado) // outra forma de percorrer
aprovados.forEach(exibirAprovados)