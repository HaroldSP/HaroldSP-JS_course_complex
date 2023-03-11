/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

/*
1) В отдельном репозитории реализовать приложение конвертер валют
2) С помощью API - https://exchangeratesapi.io/ получить стоимость доллара и евро (не обязательно использовать этот api , есть и другие)

3) На странице должен быть select или radio кнопки с выбором валюты USD или EUR

4) Добавьте на страницу input, вводим количество валюты и получаем количество рублей

5) Так же возможность конвертировать обратно из рублей в валюту

6) Дизайн и исполнение на ваше усмотрение, главное чтобы пользователь мог в поле ввода ввести текст, нажать кнопку и получить перевод своего текста
*/

// Функция фильтрации значения по типу данных, принимает type и сколь угодно values
// Typeof comparisons should be to string literals
// const filterByType = (type, ...values) => values.filter(value => typeof value === type)

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

// Функция, пытающаяся применить фильтрацию к значению, принимает тип и значения для фильтрации
// const tryFilterByType = (type, values) => {
//   try {
//     // Создаем строку с командой filterByType и значениями, и передаем ее в eval()
//     // Применять eval() не рекомендуется из-за проблем с безопасностью.
//     const valuesArray = eval(`filterByType('${type}', ${values})`).join(', ')
//     // Создаем сообщение в зависимости от длины массива значений, тернарный оператор
//     const alertMsg = (valuesArray.length)
//       ? `Данные с типом ${type}: ${valuesArray}`
//       : `Отсутствуют данные типа ${type}`
//     // Отображаем сообщение в блоке "Ok"
//     showResults(alertMsg)
//   } catch (e) {
//     // Отображаем сообщение об ошибке
//     showError(`Ошибка: ${e}`)
//   }
// }

// Получение элемента кнопки фильтрации
const filterButton = document.querySelector('#filter-btn')

// Обработка события клика на кнопке фильтрации
filterButton.addEventListener('click', e => {
  // Получаем доступ к элементам ввода
  const typeInput = document.querySelector('#type')
  const dataInput = document.querySelector('#data')

  // Проверяем, не пустое ли поле ввода
  if (dataInput.value === '') {
    // Устанавливаем свою валидацию (если ввод невалидный) и показываем блок "Нет результатов"
    dataInput.setCustomValidity('Поле не должно быть пустым!')
    showNoResults()
  } else {
    // Очищаем свою валидацию, предотвращаем действие по умолчанию и вызываем функцию фильтрации по типу
    dataInput.setCustomValidity('')
    e.preventDefault()
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim())
  }
})
