// itera em cima dos valores, ao contrário do for-in que itera em cima dos indices

for(let letra of "Escola") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
]) // para percorrer tanto os indices quanto os valores, já que cada array é um valor

for(let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()){
    console.log(chave) // acessa só as chaves
}

for (let valor of assuntoMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl) // desctruturing para separar as chaves dos valores
}

const s = new Set(['a', 'b', 'c'])

for(let letra of s) {
    console.log(letra)
}