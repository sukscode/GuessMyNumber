'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 18;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
  }
  //when player wins
  else if (guess === number) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈Too High!!' : '📉Too Low!!';
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textcontent = score;
    }
  }
  /*
  //high score
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!!';
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textcontent = score;
    }
  }
  //low score
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!!';
      score = score - 1;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textcontent = score;
    }
  }*/
});
//Again button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.score').textcontent = score;
  document.querySelector('.number').textcontent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
