// try é um bloco de código que dentro dele pode haver algum erro 
// o erro é passado como argumento para o catch 
// throw retorna para o usuário
// finally é executado sempre, mesmo que ocorra erro ou não

function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) {
        tratarErroELancar(erro)    
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
