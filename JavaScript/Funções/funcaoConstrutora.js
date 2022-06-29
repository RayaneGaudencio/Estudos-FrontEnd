function Ventilador(velMax) {
    this.velocidadeMaxima = velMax; // this é utilizado para criar um objeto
    this.ligado = false
    this.marca = "arno"
}

const ventilador1 = new Ventilador(3) // velMax passa a ser 3
console.log(ventilador1.velocidadeMaxima)

ventilador1.cor = "Branco" // atribuindo propriedades ao novo objeto 
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
    if(this.ligado) // se estiver ligado vai desligar
        this.ligado = false
    else 
        this.ligado = true
}

ventilador1.ligaDesliga() // chama a função 
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

console.log(ventilador1)

console.log(`A marca é: ${ventilador1.marca}`) 