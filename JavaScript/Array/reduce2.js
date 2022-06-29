const alunos = [ 
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// retornar apenas verdadeiro ou falso
// mostrar se há algum aluno bolsista

let alunosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual == false)
    console.log("Nem todos os alunos são bolsistas.")

    if(atual == true) 
    console.log("Há aluno bolsista.")
})

console.log(alunosBolsistas)

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
const algumBolsita = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsita))