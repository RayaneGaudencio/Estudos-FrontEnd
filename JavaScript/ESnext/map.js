const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])// não é possível no objeto ter chaves assim

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has verifica se o elemento está contido no Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // quantidade de elementos do Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas) // map não aceita chaves com mesmo identificador, mas os valores podem ser os mesmos