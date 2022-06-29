// Executar uma promise apenas quando as outras foram resolvidas 

function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max] // destruturing para inverter a ordem dos elementos
    }
    
    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * ((max - min) + 1))
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
         gerarNumerosEntre(1, 60, 1000),
         gerarNumerosEntre(1, 60, 500),
         gerarNumerosEntre(1, 60, 3000),
         gerarNumerosEntre(1, 60, 1500),
         gerarNumerosEntre(1, 60, 2000)
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros)) // só traz o resultado depois de ter executado todos