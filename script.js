/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

/*

1) Реализовать функционал выбора автомобилей и показа информации для каждого. Пример в видео Cars

2) Реализовать получение данных с помощью Promise/Fetch

3) Обязательно обработать ошибки

*/

const select = document.getElementById('my-select');
const result = document.getElementById('result');

const getData = (source = 'lesson28_cars.json') => {
  return fetch(source)
    .then(response => {
      if (!response.ok) { console.log('data not loaded'); return }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => console.error('An error occurred:', error));
};

getData()
  .then(data => {
    const carsList = data.cars;
    let firstCarObject = carsList[0];
    let secondCarObject = carsList[1];

    const showDiv = function () {
      let selectedOption = select.options[select.selectedIndex].value;

      if (selectedOption === '') {
        result.innerHTML = 'Выберите тачку';
      } else if (selectedOption === 'bmw') {
        result.innerHTML = `Тачка: ${firstCarObject.brand} ${firstCarObject.model} <br> 
        Цена: ${firstCarObject.price} $`;
      } else if (selectedOption === 'volvo') {
        result.innerHTML = `Тачка: ${secondCarObject.brand} ${secondCarObject.model} <br> 
        Цена: ${secondCarObject.price} $`;
      }
    };

    select.addEventListener('change', showDiv);
  });
