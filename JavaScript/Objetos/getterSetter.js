/* vantagens de utilizar o get
* pode fazer uma validação antes de devolver pro usuário 
* JavaScript não suporta sobrecarga de metódos (vários metódos com o mesmo nome), apenas em get set */

const sequencia = {
    _valor: 3, // convenção, mostrando que é uma variavel que é pretendida ser acessada apenas internamente 
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
          this._valor = valor 
      }
    }
}

console.log(sequencia.valor, sequencia.valor) // no primeiro acessa o valor 1 (get), no segundo o valor 2(set)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

