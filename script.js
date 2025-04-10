const html = document.querySelector('html')
const buuttonFoco = document.querySelector('.app__card-button--foco')
const buuttonCurto = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

buuttonFoco.addEventListener('click', () => {
    alterarContexto('foco')
})

buuttonCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}