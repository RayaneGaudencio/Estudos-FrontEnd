// Usa quando quer ter um processamento assíncrono 
// destinos: resolvida ou rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    }) // função será chamada quando a promessa for atendida
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // .then é uma função da promise
    .then(outraFrase => console.log(outraFrase))
// pode encadear quantos .then quiser