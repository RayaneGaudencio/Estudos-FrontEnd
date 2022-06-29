// Forma diferente de escrever um objeto
// Utilizado algumas vezes em React

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
        this.valor = valor
    } // funcao que por padrão é chamada no momento em que a classe for instanciada com o operador new
} 

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())