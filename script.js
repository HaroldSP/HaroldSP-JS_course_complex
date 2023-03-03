/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

/*
1) Написать две функции для реализации AJAX запросов: getData и sendData

3) Реализовать получение данных из файла .json (прикреплен под видео)  через функцию getData

4) После получения объекта из файла .json должна произойти отправка данных
(которые мы получили из файла .json) на URL через функцию sendData

https://jsonplaceholder.typicode.com/posts

5) Ошибки должны быть обработаны

При загрузке страницы сперва должно произойти получение данных из файла и после этого сразу
отправка

УСЛОЖНЕННОЕ ЗАДАНИЕ:

Реализовать отправку данных на https://jsonplaceholder.typicode.com/posts
методом XMLHttpRequest

*/

const sendData = (url, data) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
};

const getData = (source = 'db.json') => {
  return fetch(source)
    .then(response => {
      if (!response.ok) { console.log('data not loaded'); return }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // other data manipulations
      // return data;
      sendData('https://jsonplaceholder.typicode.com/posts', data);
    })
    .catch(error => console.error('An error occurred:', error));
};

getData();
