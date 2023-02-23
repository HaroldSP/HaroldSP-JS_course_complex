/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'
// Написать любую анимацию, используя requestAnimationFrame и кнопку, активирующую её

// Кнопка должна ставить анимацию на паузу и продолжать анимацию после повторного нажатия на нее.
// Добавить кнопку reset, которая будет возвращать анимацию в первоначальное состояние.

let santa = document.getElementById('santa');
let gift = document.getElementById('gift');

let count = 0;
let idInterval;

const button = document.getElementById('toggle-button');

button.addEventListener('click', function () {
  if (button.textContent === 'Start') {
    button.textContent = 'Pause';
    flyAnimate();
  } else {
    button.textContent = 'Start';
    cancelAnimationFrame(idInterval);
  }
});

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function () {
  count = 0;
  cancelAnimationFrame(idInterval);
  gift.style.top = 180 + 'px';
  santa.style.left = 0 + 'px';
});

const flyAnimate = () => {
  count++;
  idInterval = requestAnimationFrame(flyAnimate);

  if (count < 150) {
    gift.style.top = (180 + count * 2) + 'px';
    santa.style.left = count * 3 + 'px';
  } else if (count < 350) {
    santa.style.left = count * 3 + 'px';
  } else {
    cancelAnimationFrame(idInterval)
  }
};
