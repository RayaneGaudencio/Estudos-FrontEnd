let boolean = false
console.log(boolean)

boolean = true
console.log(boolean)

boolean = 0
console.log(!!0)

boolean = 1
console.log(!!1)

// valores verdadeiros 
console.log(!!3) // todo número inteiro tem valor true
console.log(!!-1)
console.log(!!' ')// espaço vazio
console.log(!![]) //Array vazio 
console.log(!!{})// objeto literal
console.log(!!Infinity) // tipo infito Ex: 7/0
console.log(!!(boolean = true))

//falsos

console.log(!!0)
console.log(!!"")// string vazia (sem espaços)
console.log(!!null)
console.log(!!NaN)// não é um número 
console.log(!!undefined)
console.log(!!(boolean = false))

console.log(!!('' || 0 || null || ' ')) // a última string com espaço vazio é verdadeira, então o valor retorna verdadeiro


