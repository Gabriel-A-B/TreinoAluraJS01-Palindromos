const resultado = document.getElementById('resultado')
const caixaDeTexto = document.getElementById('palavra')
const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {
    debugger
    let resposta = caixaDeTexto.value
    let respostaNormal = caixaDeTexto.value
    resposta.split('').reverse().join('')
    if (resposta == respostaNormal) {
        resultado.innerHTML = `
        <h1 class="resultado_titulo">Essa palavra é um Palindromo</h1>
        `
    }else {
        resultado.innerHTML = `
        <h1 class="resultado_titulo">Essa palavra não é um Palindromo</h1>
        `
    }
})