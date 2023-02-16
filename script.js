'use strict'

// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:

// Написать функцию которая принимает 2 целых числа x и y
// Функция должна вычислять сумму цифр результата x в степени y.
// Например вызов
// getResult(4, 8) -->> 25
// 48 = 65536, а сумма его цифр составляет 6 + 5 + 5 + 3 + 6 = 25.

const a = document.getElementById('a');
const b = document.getElementById('b');
const sum = document.getElementById('sum');
const mult = document.getElementById('mult');
const res = document.getElementById('res');

sum.hidden = true;
mult.innerHTML = 'Результат работы функции';

const calculator = {

  sumResult: 0,

  powResult: 1,

  sum: (powResult) => {
    let stringArray = powResult.toString();

    calculator.sumResult = 0;

    for (let i = 0; i < stringArray.length; i += 1) {
      calculator.sumResult += +stringArray[i];
    }

    return calculator.sumResult;
  },

  pow: (a, b) => {
    return a ** b;
  },

  showPow: () => {
    calculator.powResult = calculator.pow(+a.value, +b.value);
    calculator.sumResult = calculator.sum(calculator.powResult);
    res.value = calculator.sumResult;
    a.value = '';
    b.value = '';
    return calculator.powResult;
  }
}

mult.addEventListener('click', calculator.showPow);

// ///////////////////////     first task         ////////////////////////////////

// Решить задачу где возможно используй this
// В объект можно добавлять свои свойства
// Есть объект calculator с тремя методами:
// sum() возвращает сумму этих двух значений
// mult() возвращает произведение этих двух значений
// show() выводит результат вычислений в инпут ".res" объекта

// const a = document.getElementById('a');
// const b = document.getElementById('b');
// const sum = document.getElementById('sum');
// const mult = document.getElementById('mult');
// const res = document.getElementById('res');

// const calculator = {

//   sum: (...params) => {
//     return params.reduce((sum, num) => sum + num);
//   },

//   mult: (...params) => {
//     return params.reduce((sum, num) => sum * num, 1);
//   },
//   showSum: () => {
//     let sumResult = calculator.sum(+a.value, +b.value);
//     res.value = sumResult;
//     a.value = '';
//     b.value = '';
//   },
//   showMult: () => {
//     let multResult = calculator.mult(+a.value, +b.value);
//     res.value = multResult;
//     a.value = '';
//     b.value = '';
//   }
// }

// sum.addEventListener('click', calculator.showSum);
// mult.addEventListener('click', calculator.showMult);
