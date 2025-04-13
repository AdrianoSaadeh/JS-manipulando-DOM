const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.getElementById('start-pause')
const musicaFocoIput = document.getElementById('alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const iniciarOUPausarBt = document.querySelector('#start-pause span')
const iniciarOUPausarBtIcone = document.querySelector('#start-pause img')

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')

let tempoDecorridoEmSegundos = 5
let intervaloId = null

musica.loop = true

musicaFocoIput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})


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

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        //audioTempoFinalizado.play()
        alert('Tempo finalizado')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Tempo: ' + tempoDecorridoEmSegundos)
    console.log('Id: ' + intervaloId)
}

startPauseBt.addEventListener('click', iniciarOUPausar)

function iniciarOUPausar() {
    if (intervaloId) {
        audioPausa.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOUPausarBt.textContent = 'Pausar'
    iniciarOUPausarBtIcone.setAttribute('src', `imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOUPausarBt.textContent = 'Começar'
    intervaloId = null
    iniciarOUPausarBtIcone.setAttribute('src', `imagens/play_arrow.png`)
}