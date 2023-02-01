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

let lang = confirm('Вывести все дени недели на русском языке? Press "отмена" for English');
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

if (lang === 'ru') {
  for (let day of daysRu) {
    console.log(day);
  }
} else if (lang === 'en') {
  for (let day of daysEn) {
    console.log(day);
  }
} else {
  console.log('Что-то пошло не так');
}

switch (lang) {
  case 'ru':
    for (let day of daysRu) {
      console.log(day);
    }
    break;
  case 'en':
    for (let day of daysEn) {
      console.log(day);
    }
    break;
  default:
    console.log('Что-то пошло не так');
}

let daysRuOrEn;
lang === 'ru' ? daysRuOrEn = matrixDays[0] : daysRuOrEn = matrixDays[1];
for (let day of daysRuOrEn) {
  console.log(day);
}

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
