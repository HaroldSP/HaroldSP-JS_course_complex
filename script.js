'use strict'

// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:

// Решить задачу где возможно используй this
// В объект можно добавлять свои свойства
// Есть объект calculator с тремя методами:
// sum() возвращает сумму этих двух значений
// mult() возвращает произведение этих двух значений
// show() выводит результат вычислений в инпут ".res" объекта

const a = document.getElementById('a');
const b = document.getElementById('b');
const sum = document.getElementById('sum');
const mult = document.getElementById('mult');
const res = document.getElementById('res');

const calculator = {

  sum: (...params) => {
    return params.reduce((sum, num) => sum + num);
  },

  mult: (...params) => {
    return params.reduce((sum, num) => sum * num, 1);
  },
  showSum: () => {
    let sumResult = calculator.sum(+a.value, +b.value);
    res.value = sumResult;
    a.value = '';
    b.value = '';
  },
  showMult: () => {
    let multResult = calculator.mult(+a.value, +b.value);
    res.value = multResult;
    a.value = '';
    b.value = '';
  }
}

sum.addEventListener('click', calculator.showSum);
mult.addEventListener('click', calculator.showMult);
