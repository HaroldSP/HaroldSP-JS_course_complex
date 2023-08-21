'use strict';

/*
1) В отдельном репозитории реализовать приложение конвертер валют
2) С помощью API - https://exchangeratesapi.io/ получить стоимость доллара и евро (не обязательно использовать этот api , есть и другие)

3) На странице должен быть select или radio кнопки с выбором валюты USD или EUR

4) Добавьте на страницу input, вводим количество валюты и получаем количество рублей

5) Так же возможность конвертировать обратно из рублей в валюту

6) Дизайн и исполнение на ваше усмотрение, главное чтобы пользователь мог в поле ввода ввести текст, нажать кнопку и получить перевод своего текста
*/

// Функция скрытия всех блоков ответов (reset)
const hideAllResponseBlocks = () => {
  const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'))
  responseBlocksArray.forEach(block => block.style.display = 'none')
}

// Функция показа блока ответа с сообщением
const showResponseBlock = (blockSelector, msgText, spanSelector) => {
  hideAllResponseBlocks()
  document.querySelector(blockSelector).style.display = 'block'
  if (spanSelector) {
    document.querySelector(spanSelector).textContent = msgText
  }
}

// Функция показа блока с сообщением об ошибке
const showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error')

// Функция показа блока с результатами фильтрации
const showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok')

// Функция показа блока с сообщением об отсутствии результатов
const showNoResults = () => showResponseBlock('.dialog__response-block_no-results')

const showResultMain = (type1, type2, values) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append('apikey', 'Tv3T2mrEWyGoyJ6LMFpBlEMNNU8ivK7R');

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${type2}&from=${type1}&amount=${values}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.result);
        let resultWithCurrency = result.result + type2;
        showResults(resultWithCurrency);
        filterButton.textContent = 'Конвертировать';
      })
      .catch(error => console.log('error', error));
  } catch (e) {
    // Отображаем сообщение об ошибке
    showError(`Ошибка: ${e}`)
  }
}

// Получение элемента кнопки
const filterButton = document.querySelector('#filter-btn')

// Обработка события клика
filterButton.addEventListener('click', e => {
  // Получаем доступ к элементам ввода
  const typeInput1 = document.querySelector('#type1')
  const typeInput2 = document.querySelector('#type2')
  const dataInput = document.querySelector('#data')

  filterButton.textContent = 'Ожидайте...';

  // Проверяем, не пустое ли поле ввода
  if (dataInput.value === '') {
    // Устанавливаем свою валидацию (если ввод невалидный) и показываем блок "Нет результатов"
    dataInput.setCustomValidity('Поле не должно быть пустым!')
    showNoResults()
  } else {
    dataInput.setCustomValidity('')
    e.preventDefault()
    showResultMain(typeInput1.value.trim(), typeInput2.value.trim(), dataInput.value.trim())
  }
})
