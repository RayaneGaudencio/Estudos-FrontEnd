// criando um metódo forEach

const aprovados = ["Zendaya", "Agatha", "Aldo", "Daniel", "Raquel"]

function forEach2(param) {
    let conteudo = " "
    for(let i = 0; i < param.length; i++) {
        conteudo = param[i]
        console.log(`${i + 1}: ${conteudo}`)
    }
}

console.log(forEach2(aprovados))

Array.prototype.forEach3 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach3(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})