'use strict'

// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:

// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
// Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow"
// и фон квадрата должен поменяться

const btn = document.getElementById('btn')
const input = document.querySelector('input[type=text]')
const square = document.getElementById('square')
const span = document.getElementById('text-span')
const rangeSpan = document.getElementById('range-span')
const e_btn = document.getElementById('e_btn')
const range = document.getElementById('range')
const circle = document.getElementById('circle')

input.placeholder = 'Цвета: red, green, blue etc...'
input.title = 'можно ввести цвет на английском языке: red, green, blue и так далее.'
span.innerHTML = 'Чтобы отправить цвет, нажмите "enter" или кнопку "Button"'

const changeSquareColor = function (e) {
  if (e.keyCode == 13) {
    square.style.backgroundColor = input.value
    input.value = ''
  }
}

btn.onclick = function () {
  square.style.backgroundColor = input.value
  input.value = ''
}
input.addEventListener('keydown', changeSquareColor)

// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "

e_btn.style.display = 'none'

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:

// при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка
// (который внутри квадрата) (height и width) (в процентах!!)

rangeSpan.textContent = 50

const getSpanValues = function (e) {
  rangeSpan.textContent = e.target.value
}

const getCircleSize = function (e) {
  const values = e.target.value
  circle.style.height = `${values}%`
  circle.style.width = `${values}%`
}

range.addEventListener('input', getSpanValues)
range.addEventListener('input', getCircleSize)

// testing a branch copying
