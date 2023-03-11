/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

/*

1) Реализовать функционал выбора автомобилей и показа информации для каждого. Пример в видео Cars

2) Реализовать получение данных с помощью Promise/Fetch

3) Обязательно обработать ошибки

*/

// Шаблон получения данныых из json файла lesson28_cars.json
/*
let dataRecievied;

const getData = (source = 'dbHeroes.json') => {
  return fetch(source)
    .then(response => {
      if (!response.ok) { console.log('data not loaded'); return }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      // other data manipulations
      return data;
    })
    .catch(error => console.error('An error occurred:', error));
};

getData()
  .then(data => {
    // console.log(data, typeof data);
    let allKeysArr = [];

    for (const obj of data) {
      // console.log(obj);
      for (const key in obj) {
        // const value = obj[key];
        // console.log(key, typeof key);

        if (!allKeysArr.includes(key)) allKeysArr.push(key);
      }
    }
    console.log(allKeysArr, typeof data);
  });
*/
