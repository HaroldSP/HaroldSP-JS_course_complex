/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

/*
На каждой клетке вы видите кнопки с направлением, напишите скрипт, чтобы при клике на кнопку, клетка менялась с соответствующей клеткой своим положением, соответственно направлению стрелки.

Если вверх, вниз вправо или влево идти некуда, то происходить ничего не должно(со следующей строкой поменяться можно (например 20 с 21).

При клике на кнопку RESET все клетки должны вставать на свои места

Лезть в вёрстку запрещено, использовать только те классы, что предоставлены
Вызывать перезагрузку страницы запрещено, программа должна работать и сбрасываться без перезагрузок.
*/
const resetBtn = document.querySelector('.btn-reset');
const blocks = document.querySelectorAll('.block');

// навесим прослушку на весь элемент
const container = document.querySelector('.square-body');
container.addEventListener('click', handleBlockClick);

// основная функция
function handleBlockClick (event) {
  // проверяем, был ли клик по стрелке
  const clickedArrow = event.target.closest('.arrow');
  if (!clickedArrow) return;

  // у кликнутой стрелки есть класлист, в нем два класса, второй указывает на направление
  const direction = clickedArrow.classList[1];

  // находим ближайший к кликнутой стрелке блок и его номер
  const block = event.target.closest('.block');
  const blockNumber = block.querySelector('.block-number');

  // превращаем нодлист блоков в обычный массив, чтобы применить indexOf() и найти индекс кликнутого блока
  const currentIndex = Array.from(blocks).indexOf(block);

  // в зависимости от кликнутой стрелки определим индекс блока, на который нужно перескочить
  let targetIndex;
  if (direction === 'left') {
    targetIndex = currentIndex - 1;
  } else if (direction === 'right') {
    targetIndex = currentIndex + 1;
  } else if (direction === 'top') {
    targetIndex = currentIndex - 5;
  } else if (direction === 'bottom') {
    targetIndex = currentIndex + 5;
  }

  // проверим границы
  if (targetIndex < 0 || targetIndex >= blocks.length) return;

  const targetBlock = blocks[targetIndex];
  const targetBlockNumber = targetBlock.querySelector('.block-number');

  // поменяем местами номера
  const temp = blockNumber.textContent;
  blockNumber.textContent = targetBlockNumber.textContent;
  targetBlockNumber.textContent = temp;
}

resetBtn.addEventListener('click', () => {
  blocks.forEach((block, index) => {
    const blockNumber = block.querySelector('.block-number');
    blockNumber.textContent = index + 1;
  });
});
