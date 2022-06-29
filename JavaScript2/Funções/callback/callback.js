// função que é executada em determinado momento
// acontece de forma assíncrona 

const $button = document.querySelector('button')

const handleClick = () => {
    console.log('botão clicado')
} // essa função só será chamada quando o botão for clicado

$button.addEventListener('click', handleClick)