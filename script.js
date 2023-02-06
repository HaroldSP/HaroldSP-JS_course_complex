/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

let daysRu = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

let daysEn = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

let d = new Date();
let n = d.getDay();
let list = document.getElementById('out');
let p;
let currentDay = daysEn[n];

for (let day of daysRu) {
  switch (day) {
    case currentDay:
      p = document.createElement('p');
      p.innerText = day;
      p.style.fontWeight = 'bold';
      list.appendChild(p);
      break;

    case 'Воскресенье':
      p = document.createElement('p');
      p.innerText = day;
      p.style.fontStyle = 'italic';
      list.appendChild(p);
      break;

    case 'Суббота':
      p = document.createElement('p');
      p.innerText = day;
      p.style.fontStyle = 'italic';
      list.appendChild(p);
      break;

    default:
      p = document.createElement('p');
      p.innerText = day;
      list.appendChild(p);
      break;
  }
}
