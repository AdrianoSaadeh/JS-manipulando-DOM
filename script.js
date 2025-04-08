const html = document.querySelector('html')
const buuttonFoco = document.querySelector('.app__card-button--foco')
const buuttonCurto = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

buuttonFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

buuttonCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})