function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max] // destruturing para inverter a ordem dos elementos
    }
    
    return new Promise(resolve => {
        const aleatorio =parseInt(Math.random() * ((max - min) + 1))
        resolve(aleatorio)
    })
}

gerarNumerosEntre(500, 300)
    .then(console.log)
    .then(num => num * 10)
    .then(numX10 => `O número foi múltiplicado por 10.`)
    .then(console.log)