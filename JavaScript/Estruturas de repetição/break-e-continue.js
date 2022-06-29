const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numbers) {
    if (x == 5) {
        break // não age em cima do bloco if, age em cima do bloco associado
        // interrompe o laço e sai pra próxima sentença de código fora do laço que ele está relacionado
    }
    console.log(`${x} = ${numbers[x]}`)
}

for (y in numbers) {
    if (y == 5) {
        continue // interrompe a execução atual em cima do laço em que está relacionado e vai para próxima
    }
    console.log(`${y} = ${numbers[y]}`)
}

externo: for (a in numbers) {
    for (b in numbers) {
        if(a == 2 && b == 3) break externo // se colocar apenas o break ele vai agir apenas dentro do bloco interno. Para dar um break em tudo foi criado um rótulo externo
    }
}