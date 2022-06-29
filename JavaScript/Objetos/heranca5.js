console.log(typeof String) // função
console.log(typeof Array)
console.log(typeof Object)
// como todas são uma função, todas tem o atributo prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('').toLowerCase(5)
} // utiliza-se o this para acessar o metódo
console.log('Rayane'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou'
} // sobrescreve o metódo toString **NÃO FAZER**

console.log('Rayane'.reverse())