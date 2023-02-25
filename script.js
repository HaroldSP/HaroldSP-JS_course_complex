/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

/*

1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>».

2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>,

5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>

Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/

*/

// 1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>».

const taskOne = document.getElementById('task1');

// const regexpone = /\b[функц].*/gi;
// const regexpone = /функц\w*/gi;
const regexpone = /функци(и|я)/gi;

// let arr = taskOne.innerHTML.match(regexpone);
// console.log(arr);

taskOne.innerHTML = taskOne.innerHTML.replace(regexpone, '<strong>$&</strong>');

// 2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
// заключить найденное время в тег <b></b>

const taskTwo = document.getElementById('task2');
const regexptwo = /\d{2}:\d{2}/g;
taskTwo.innerHTML = taskTwo.innerHTML.replace(regexptwo, '<b>$&</b>'); // по сути поменялось только 25Ж35

// 3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>
const taskThree = document.getElementById('task2');
const regexpthree = /"([^"]*)"/g;
taskThree.innerHTML = taskThree.innerHTML.replace(regexpthree, '<mark>$&</mark>');

// 4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>,
// const taskFour = document.getElementById('task2');
// const regexpfour = /(https?:\/\/\S+)/gi;
// taskFour.innerHTML = taskFour.innerHTML.replace(regexpfour, (match) => {
//   return '<a href="' + match + '">' + match.replace(/https?:\/\//, '') + '</a>';
// });

// 5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль;
const taskFive = document.querySelector('body');
const regexpfive = /#([A-Fa-f0-9]{6})\b/g;
let matches = taskFive.innerHTML.match(regexpfive);
console.log(matches);

// Чтобы использовать 6ый пункт, 4ый должен быть закомментирован.
// 6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>
const taskSix = document.getElementById('task2');

// eslint-disable-next-line no-useless-escape
const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const replacement = '<a href="$1">$2</a>';
taskSix.innerHTML = taskSix.innerHTML.replace(regex, replacement);
