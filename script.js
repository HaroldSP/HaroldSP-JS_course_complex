/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

let daysRu = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

let daysRuModified = [];
let d = new Date();
let n = d.getDay();
let list = document.getElementById('mydiv');
console.log(n)
// daysRu.forEach((day) => {
//   if ((day == 'Воскресенье') && (day == 'Суббота')) {
//     alert('a');
//     // let p = document.createElement('p');
//     // p.innerText = day;
//     // document.getElementById('mydiv').style.fontStyle = 'italic';
//     // list.appendChild(p);
//   } else {
//     let p = document.createElement('p');
//     p.innerText = day;
//     list.appendChild(p);
//   }
// });
let p;
for (let day of daysRu) {
  switch (day) {
    // case :

    case 'Воскресенье':
      p = document.createElement('p');
      p.innerText = day;
      document.getElementById('mydiv').style.fontStyle = 'italic';
      list.appendChild(p);
      break;
    case 'Понедельник':
      p = document.createElement('p');
      p.innerText = day;
      list.appendChild(p);
      break;

    case '2':
      alert('Два');
      break;

    case 3:
      alert('Никогда не выполнится!');
      break;
    default:
      alert('Неизвестное значение');
  }

//   if (day == 'Воскресенье') {
//     let p = document.createElement('p');
//     p.innerText = day;
//     list.appendChild(p);
//     document.getElementById('div').style.fontStyle = 'italic';
//   } else if (day == 'Понедельник') {
//     let p = document.createElement('p');
//     p.innerText = day;
//     list.appendChild(p);
//   }
// }

// ['Бильбо', 'Гэндальф', 'Назгул'].forEach((item, index, array) => {
//   let p = document.createElement('p');
//   p.innerText = item;
//   list.appendChild(p);
//   document.getElementById('p').style.fontStyle = 'italic';
// });

// for (let day of daysRu) {
//   if ((day === 'Воскресенье') && (day === 'Воскресенье')) {
//     alert('\__Воскресенье\__');
//   }
// }

// daysRuModified = daysRu.join('\n');

// // alert(daysRuModified);
// console.log(daysRuModified, typeof daysRuModified);

// document.getElementById('mydiv').innerHTML = ''
// document.getElementById('mydiv').style.fontStyle = 'italic';
// document.getElementById('mydiv').innerHTML = daysRu;
// for (let day of daysRu) {
//   alert(`${day}\n${day}\n`);
// }

// alert([daysRu]);
// alert(daysRu[1]);

// function italicsBody () {
//   document.getElementById('mydiv').style.fontStyle = 'italic';
// }
// function populateNames () {
//   let names = ['name1', 'name', 'name3']
//   let nameList = document.getElementById('names');
//   for (let key in names) {
//     nameList.innerHTML = nameList.innerHTML + ' <li> ' + names[key] + '</li>';
//   }
// }
// populateNames()
// italicsBody()
