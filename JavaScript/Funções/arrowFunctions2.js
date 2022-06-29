function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 2000)
}
// diferente do outro código, na arrow function não é necessário 'amarrar' o this com bind, pois o this na arrow function busca o objeto antes dele

new pessoa