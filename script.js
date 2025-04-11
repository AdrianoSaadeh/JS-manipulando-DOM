const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')

buttonFoco.addEventListener('click', () => {
    alterarContexto('foco')
    buttonFoco.classList.add('active')
})

buttonCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    buttonCurto.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(b => {
        b.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            title.innerHTML = 'Otimize sua produtividade,<br> <strong class = "app__title-strong"> mergulhe no que importa. </strong>'
            break;
        case "descanso-curto":
            title.innerHTML = 'Que tal dar uma respirada? <br> <strong class = "app__title-strong"> Faça uma pausa curta. </strong>'
            break;
        case "descanso-longo":
            title.innerHTML = 'Hora de voltar à superfície.<br> <strong class = "app__title-strong"> Faça uma pausa longa. </strong>'
            break;

        default:
            break;
    }
}