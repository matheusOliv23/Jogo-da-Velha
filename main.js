var jogador = null
var jogadorSelecionado = document.getElementById('playerSelected')

mudarJogador('X')

function escolherQuadrado(id) {
  let quadrado = document.getElementById(id)
  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = 'rgb(37, 103, 226)'

  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }

  mudarJogador(jogador)
}

function mudarJogador(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}
