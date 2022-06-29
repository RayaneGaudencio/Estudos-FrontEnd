const a = 1
const b = 2
const c = 3

// criar uma variável com o conteúdo da constante quando o nome é o mesmo
const obj1 = {a: a, b: b, c: c} // antes do ES2015 
const obj2 = { a, b, c }
console.log(obj1, obj2)


const nomeAttr = 'nota'
const valorAttr = 7.8
const obj3 = {}
obj3[nomeAttr] = valorAttr // 'concatena' os dois
console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr} // igual ao de cima
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2 () {
        // forma reduzida de fazer
    }
}
console.log(obj5)