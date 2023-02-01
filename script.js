/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// ////////////////////////////////// first task /////////////////////////////////////////////////////

// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
//  b) через switch-case
//  c) через многомерный массив без ифов и switch.

let lang = confirm('Вывести день недели на русском языке? Press "отмена" for English');
lang === true ? lang = 'ru' : lang = 'en';
let daysRu = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
let daysEn = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let matrixDays = [
  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
];
let d = new Date();
let n = d.getDay();

if (lang === 'ru') {
  console.log(daysRu[n]);
} else if (lang === 'en') {
  console.log(daysEn[n]);
} else {
  console.log('Что-то пошло не так');
}

switch (lang) {
  case 'ru':
    console.log(daysRu[n]);
    break;
  case 'en':
    console.log(daysEn[n]);
    break;
  default:
    console.log('Что-то пошло не так');
}

lang === 'ru' ? console.log(matrixDays[0][n]) : console.log(matrixDays[1][n]);

// ////////////////////////////////// second task /////////////////////////////////////////////////////

// У нас есть переменная namePerson.
// Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”,
// с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

// eslint-disable-next-line no-multi-str
let namePerson = prompt('Представьтесь, пожалуйста. \
\nНапишите только своё имя. \
\nНапишите имя с заглавной буквы, используйте "е" вместо "ё".', 'Иван');

let whoIsThis = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Александр') ? 'преподаватель' : 'студент';

console.log(whoIsThis);
