// Conjunto não indexado que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corithians')
times.add('Flamengo')
times.add('Vasco') // não pode adicionar novamente

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // retorna false pois o v tá mínusculo
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
