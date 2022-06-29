/*Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

function numeroArredondado (valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
  console.log(valorEmReais)
}

numeroArredondado(0.1 + 0.2)



// ou pode utilizar Math, caso queira arredondar para números próximos

let resultado2 = numeroArredondado()
resultado2 = Math.ceil(resultado2)
console.log(resultado2)