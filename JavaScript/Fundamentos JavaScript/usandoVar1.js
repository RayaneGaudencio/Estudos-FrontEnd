{{{{ var sera = 'Será?'}}}}
console.log(sera) // consegue acessar a variável

function teste() {
    var local = 123
    console.log(local)
}
teste() // mostra no que tem na function 
// console.log(local)  não consegue acessar a variável,
// apenas dentro do escopo da função

// DECLARAÇÃO DE VARIÁVEIS COM VAR 2

var numero = 1 
{
    var numero = 2 
    console.log('dentro=', numero)
}
console.log('fora=', numero) // retorna a variavel que foi atribuída dentro do escopo,
// pois não foi criada uma função pra armazenar a variável, apenas um bloco entre chaves.