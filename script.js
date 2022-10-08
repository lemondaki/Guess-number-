'use strict';
const check = document.querySelector('.check');
const backgroundBody = document.querySelector('body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
let scretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let highScore = 0;
let scored = 20;
let isWinner = true;
//Function display message in the screen;
const displayMessage = function (message) {
    document.querySelector('.message').innerText = message;
}
// Fuction when click to check button;
check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('❌ No number!');
    }
    if (isWinner) {
         if (guess > 0 && guess <= 20) {
            if (guess === scretNumber) {
                displayMessage('🎁 Correct Number!');
                number.innerText = scretNumber;
                isWinner = false;
                backgroundBody.style.backgroundColor = '#60b347';
                if (scored > highScore) {
                    highScore = scored;
                    document.querySelector('.highscore').innerText = highScore;
                }
            }
            else {
                if (scored > 1) {
                    scored--;
                    displayMessage(guess > scretNumber ? '⏫Too high' : '⏬Too low');
                    document.querySelector('.score').innerText = scored;
                }
                else {
                    displayMessage('⛔ You lost the game!');
                    document.querySelector('.scored').innerText = 0;
                }
            }
        }
   }
})
// Make Again Game Feature:
again.addEventListener('click', function () {
    scretNumber = Math.trunc(Math.random() * 20) + 1;
    scored = 20;
    isWinner = true;
    number.innerText = '?';
    backgroundBody.style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.score').innerText = scored;
    document.querySelector('.guess').value = '';
})