"use strict";

let number = Math.trunc(Math.random() * 21);

let score = 20;
let high = 0;

//Reinicia o jogo
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 21);

  score = 20;
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Tente adivinhar...";

  document.querySelector(".message").style.color = '#eee'
  document.querySelector('header').style.borderColor = '#eee';
});

//Checa se o usuário acertou
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Sem nenhuma entrada
  if (!guess) {
    document.querySelector(".message").textContent =
      "🚩 Nenhum número inserido!";
  }

  //Todas as tentativas foram gastas
  else if (score === 0) {
    document.querySelector(".message").textContent = "💥 Você perdeu!";
  } 

  //Resposta correta
  else if (guess === number) {
    /* Indica que a resposta está correta
    e revela o número */
    document.querySelector(".message").textContent = "😁 Correta resposta!";

    document.querySelector(".message").style.color = '#60b347'
    document.querySelector('header').style.borderColor = '#60b347';
    
    document.querySelector(".number").textContent = number;

    if (score > high) {
        high = score;
        document.querySelector('.highscore').textContent = high
    }
  } 

  //Resposta errada, mas chegando perto
  else if (guess > number - 5 && guess < number + 5) {
    document.querySelector(".message").textContent = guess > number ? "🌡️ Quase lá, um pouco menor!" : "🌡️ Quase lá, um pouco maior!";

    score--;
    document.querySelector(".score").textContent = score;
  }

  //Resposta errada
  else {
    document.querySelector(".message").textContent = guess > number ? "❄️ Muito alto!" : "❄️ Muito baixo!";

    score--;
    document.querySelector(".score").textContent = score;
  }});
  
  