'use strict';
const messageEle = document.querySelector(`.message`);
const againButton = document.querySelector(`.again`);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScoreEle = document.querySelector(`.highscore`);
let latestHighscore = localStorage.getItem(`highScore`) || 0;
let body = document.querySelector(`body`);
let numberEle = document.querySelector(`.number`);
let scoreEle = document.querySelector(`.score`);
let guessEle = document.querySelector(`.guess`);
highScoreEle.textContent = latestHighscore;
let score = 20;
let found = false;
againButton.addEventListener(`click`, function () {
  score = 20;
  messageEle.textContent = `Start guessing...`;
  scoreEle.textContent = score;
  guessEle.value = ``;
  numberEle.textContent = `?`;
  body.style.backgroundColor = `#222`;
  numberEle.style.width = `15rem`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  found = false;
});
document.querySelector(`.check`).addEventListener(`click`, function (e) {
  e.preventDefault();
  const guess = Number(guessEle.value);
  if (!guess) {
    messageEle.textContent = `⛔ No number!`;
  } else if (guess === secretNumber) {
    messageEle.textContent = `🎉 Correct number!`;
    body.style.backgroundColor = `#60b347`;
    numberEle.style.width = `30rem`;
    numberEle.textContent = secretNumber;
    found = true;
    if (score > latestHighscore) {
      highScoreEle.textContent = score;
      localStorage.setItem(`highScore`, score);
    }
  } else if (!found) {
    if (score > 0) {
      if (guess > secretNumber) {
        messageEle.textContent = `📉 Too high!`;
      } else {
        messageEle.textContent = `📈 Too low!`;
      }
      --score;
      scoreEle.textContent = score;
    } else {
      messageEle.textContent = `💥 You lost the game!`;
      scoreEle.textContent = 0;
    }
  }
});
