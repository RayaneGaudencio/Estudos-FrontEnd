// iife -> Immediately Inoveked Function Expression
// Função autoinvocável 
// Função: fugir do escopo global dentro do browser

// tem que estar entre parênteses
(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})() // qualquer elemento só estará disponível dentro da função 