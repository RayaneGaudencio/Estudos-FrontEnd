// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function confereNumeros (numero1, numero2) {
        if (numero1 < numero2){ 
            return `${numero2} é maior que ${numero1}`
        } else { 
            return `${numero1} é maior que ${numero2}`
        }
}

console.log(confereNumeros(1, 2))
console.log(confereNumeros(10, 8))