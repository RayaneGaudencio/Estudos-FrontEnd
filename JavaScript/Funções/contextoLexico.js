const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // como não tem uma constante chamada valor, ele busca no contexto global 
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // mostra 'Global" pois a função tem consciência o local onde foi declarada, ela carrega consigo o contexto no qual ela foi escrita