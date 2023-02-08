function verifyGuessIsValid(guess) {
  const number = +guess

  if (guess.toUpperCase() === "GAME OVER") {
    document.body.innerHTML = `
    <div class="game-over">
      <h2>Game Over!!!</h2>
      <h3>O número secreto era ${secretNumber}</h3>
      <h3>Pressione o botão para jogar novamente</h3>

      <button id="play-again" class="btn-play">Jogar novamente</button>
    </div>`
  }

  if (guessInvalid(number)) {
    elementGuess.innerHTML += '<div>Valor inválido</div>'
    return
  }

  if (numberMaxOrMin(number)) {
    elementGuess.innerHTML += `<div>Valor inválido: fale um número entre ${minValue} e ${maxValue}</div>`
    return
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${secretNumber}</h3>

      <button id="play-again" class="btn-play">Jogar novamente</button>
    `
  } else if (number > secretNumber) {
    elementGuess.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    elementGuess.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
  `
  }

}

function guessInvalid(number) {
  return Number.isNaN(number);
}

function numberMaxOrMin(number) {
  return number > maxValue || number < minValue
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'play-again') {
    window.location.reload()
  }
})