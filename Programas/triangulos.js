/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

let triangulos = (ladoA, ladoB, ladoC) => {

    if(ladoA == ladoB && ladoA == ladoC) { 
        console.log('É um triângulo equilátero.')
    }
    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log('É um triângulo isósceles.')
    }
    else {
        console.log('É um triângulo escaleno.')
    }
}


// teste equilátero
triangulos(20, 20, 20)

// teste isósceles e escaleno
triangulos(10, 20, 30)
triangulos(10, 30, 20)
triangulos(30, 10, 20)
triangulos(30, 30, 10)
triangulos(10, 30, 30)
triangulos(30, 10, 10)
triangulos(10, 20, 30)