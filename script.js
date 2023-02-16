'use strict'

// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:

// choose country then city then result

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

let targetArray = [];
let selectedCountry = '';
let selectedOnce = false;

countrySelect.addEventListener('change', function () {
  let option;

  citySelect.style = 'display:block; position:absolute; top:8px; left:100px;'

  if (selectedOnce) {
    citySelect.innerHTML = '';
  };

  switch (this.value) {
    case 'rus':
      targetArray = cityArr.rus
      break;
    case 'uk':
      targetArray = cityArr.uk
      break;
    case 'bel':
      targetArray = cityArr.bel
      break;
    case 'jap':
      targetArray = cityArr.jap
      break;
  };

  selectedCountry = document.querySelector(`#country > option[value="${this.value}"]`).innerHTML;

  for (let i = 0; i < targetArray.length; i++) {
    option = document.createElement('option');
    option.value = targetArray[i];
    option.text = targetArray[i];
    citySelect.appendChild(option);
    selectedOnce = true;
  };
});

// ////////////////////////////////////////////////////////////////////////////////////////////

citySelect.addEventListener('change', function () {
  let result = document.querySelector('.result');
  let resultText = `${selectedCountry} ${this.value}`;

  result.innerText = resultText;
});
