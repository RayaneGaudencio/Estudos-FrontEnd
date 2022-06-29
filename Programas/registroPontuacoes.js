/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todas pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)*/



function verificaPontuacao() {
    this.pontuacoes = ['2', '1', '4', '5', '6']
    this.recordeMaior = [];
    this.recordeMenor = Math.min(...pontuacoes);
    for(let i = 0; i < pontuacoes.length; i++) {
        
        if(pontuacoes[i] > recordeMaior && pontuacoes[i] !== this.recordeMenor){
            recordeMaior += pontuacoes[i]
        }
    }
    console.log(`Maiores recordes: ${this.recordeMaior}`)
    console.log(`Menores recordes: ${Math.min(...this.pontuacoes)}`)
}

verificaPontuacao()