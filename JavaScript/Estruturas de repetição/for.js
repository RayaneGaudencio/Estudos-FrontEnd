let contador = 1

while(contador <= 10) {
    console.log(contador)
    contador++
}

for ( let contador2 = 1; contador2 <=10; contador2++) {
    console.log(contador2)
}

// ACESSANDO UMA ARRAY com FOR

const notas = [7.5, 7.3, 7,2, 8.9, 5.2]
for (i = 0; i < notas.length; i++) {
    console.log(`nota= ${notas[i]}`)
}
