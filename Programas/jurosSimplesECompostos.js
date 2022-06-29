/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

// A taxa em juros tá definida em forma decimal, seu valor é referente ao ano. Logo, o tempo de aplicação também está em anos

function montanteAplicacao (capitalInicial, taxaDeJuros, TempoAplicacao) {

    this.jurosSimples = console.log(`Montante da aplicação em Juros Simples: R$${(capitalInicial * taxaDeJuros * TempoAplicacao) + capitalInicial}.`)

    this.jurosCompostos = console.log(`Montante da aplicação em Juros Compostos: R$${(((1 + taxaDeJuros)**TempoAplicacao) * capitalInicial) + capitalInicial}`)
} 

montanteAplicacao(100, 0.05, 2)
montanteAplicacao.jurosSimples
montanteAplicacao.jurosCompostos