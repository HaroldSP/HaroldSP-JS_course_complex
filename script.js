/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

let arr = [];
let checkIfStartsWith2or4 = false;

const getRandomSevenDigitNumber = function () {
  return String(Math.floor(1000000 + Math.random() * 9000000));
}

for (let i = 0; i < 7; i++) arr.unshift(getRandomSevenDigitNumber());

for (let i = 0; i < arr.length; i++) {
  if ((Math.floor(arr[i] / 1000000) == 2) || (Math.floor(arr[i] / 1000000)) == 4) {
    console.log(arr[i], typeof arr[i]);
    checkIfStartsWith2or4 = true;
  }
}

if (!checkIfStartsWith2or4) {
  console.log(`В массиве ${arr} нет чисел, начинающихся на 2 или 4. Перезагрузите страницу.`)
}

const isPrime = function (number) {
  if (number === 1) return false;

  else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  } else return false;
}

for (let i = 1; i < 100; i++) {
  if (isPrime(i)) console.log(`${i} - простое число. Его делители 1 и ${i}`);
}
