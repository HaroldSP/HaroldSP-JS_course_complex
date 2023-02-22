/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

// Создайте отдельную HTML страницу с полем ввода (тэг input) и пустым параграфом (тэг p)

// Стилизация на ваше усмотрение.

// Введённый в поле текст должен отображаться внутри параграфа, но с задержкой в 300мс.

// При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый.

// Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в параграфе (тэг p)

const input = document.getElementById('input');
const output = document.getElementById('result');

const debounce = (func, wait) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait); // вызывается оригинальная функция (ту, которую передали в аргумент)
  };
}

const showResult = (event) => {
  output.innerHTML = event.target.value;
}

const debouncedShowResult = debounce(showResult, 300);

input.addEventListener('input', debouncedShowResult);
