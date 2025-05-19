'use strict';
const messageEle = document.querySelector(`.messageEle`);
const againButton = document.querySelector(`.again`);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScoreEle = document.querySelector(`.highScoreEle`);
let latestHighscore = localStorage.getItem(`highScoreEle`) || 0;
let body = document.querySelector(`body`);
let numberEle = document.querySelector(`.numberEle`);
let scoreEle = document.querySelector(`.score`);
let guessEle = document.querySelector(`.guess`);
highScoreEle.textContent = latestHighscore;
let score = 20;
againButton.addEventListener(`click`, function () {
  score = 20;
  messageEle.textContent = `Start guessing...`;
  scoreEle.textContent = score;
  guessEle.value = ``;
  numberEle.textContent = `?`;
  body.style.backgroundColor = `#222`;
  numberEle.style.width = `15rem`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
document.querySelector(`.check`).addEventListener(`click`, function (e) {
  e.preventDefault();
  const guess = numberEle(guessEle.value);
  if (!guess) {
    messageEle.textContent = `⛔ No numberEle!`;
  } else if (guess === secretNumber) {
    messageEle.textContent = `🎉 Correct numberEle!`;
    body.style.backgroundColor = `#60b347`;
    numberEle.style.width = `30rem`;
    numberEle.textContent = secretNumber;
    if (score > latestHighscore) {
      highScoreEle.textContent = score;
      localStorage.setItem(`highScoreEle`, score);
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      messageEle.textContent = `📉 Too high!`;
      --score;
      scoreEle.textContent = score;
    } else {
      messageEle.textContent = `💥 You lost the game!`;
      scoreEle.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      messageEle.textContent = `📈 Too low!`;
      --score;
      scoreEle.textContent = score;
    } else {
      messageEle.textContent = `💥 You lost the game!`;
      scoreEle.textContent = 0;
    }
  }
});
