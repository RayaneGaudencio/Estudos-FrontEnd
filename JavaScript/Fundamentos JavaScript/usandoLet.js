var numero = 1
{
    let numero = 2
    console.log('dentro', numero) //retorna apenas o que está dentro do escopo
}
console.log('fora', numero) //retorna o que está dentro de var

//EXEMPLO 2 

var numero = 1
{
    let numero2 = 2
    console.log('dentro', numero) /*ele procura se dentro do escopo tem uma varável chamada
    numero2, como não tem retorna o que está fora*/
}

