/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

/*

2) При помощи ajax запросов к загруженному файлу сформировать на странице карточки Героев со всеми данными
(фото, имя, настоящее имя,  список фильмов, статус). 1 персонаж - 1 карточка.

3) Реализовать переключатели-фильтры по фильмам.

Выпадающее меню или список, на ваше усмотрение

Показывать только те карточки, которые подходят под выбранный фильтр.

Стилизация карточек и всего внешнего вида - на ваше усмотрение.

Упор сделать на главную цель - донесение информации, никаких вырвиглазных цветов и шрифтов.

4) Добавить ссылку на выполненное задание

*/

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
