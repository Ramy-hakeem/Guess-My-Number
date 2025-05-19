'use strict';
const message = document.querySelector(`.message`);
const againButton = document.querySelector(`.again`);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = document.querySelector(`.highscore`);
let latestHighscore = localStorage.getItem(`highscore`) || 0;
let body = document.querySelector(`body`);
let number = document.querySelector(`.number`);
let scoreEle = document.querySelector(`.score`);

highscore.textContent = latestHighscore;
let score = 20;
againButton.addEventListener(`click`, function () {
  score = 20;
  message.textContent = `Start guessing...`;
  scoreEle.textContent = score;
  document.querySelector(`.guess`).value = ``;
  number.textContent = `?`;
  body.style.backgroundColor = `#222`;
  number.style.width = `15rem`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
document.querySelector(`.check`).addEventListener(`click`, function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    message.textContent = `⛔ No number!`;
  } else if (guess === secretNumber) {
    message.textContent = `🎉 Correct Number!`;
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`;
    number.textContent = secretNumber;
    if (score > latestHighscore) {
      highscore.textContent = score;
      localStorage.setItem(`highscore`, score);
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = `📉 Too high!`;
      --score;
      scoreEle.textContent = score;
    } else {
      message.textContent = `💥 You lost the game!`;
      scoreEle.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      message.textContent = `📈 Too low!`;
      --score;
      scoreEle.textContent = score;
    } else {
      message.textContent = `💥 You lost the game!`;
      scoreEle.textContent = 0;
    }
  }
});
