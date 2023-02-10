/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

// 1) Выведите на страницу текущую дату и время в 2-х форматах:

//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

const main = function () {
  setInterval(function () {
    let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let currentDate = new Date();

    const getDate = function () {
      currentDate = new Date();
      return currentDate;
    }
    // alert(getDate());
    // setInterval(getDate(), 1000);
    // let timerId = setInterval(() => getDate(), 1000);
    // const currentDate = new Date();

    // день недели
    let numWeekDay = currentDate.getDay();
    if (numWeekDay === 0) { numWeekDay = 6; } else { numWeekDay--; }

    // число
    // let day = currentDate.getDate()

    // месяц и число
    // let month = currentDate.getMonth() + 1

    let optionsShort = {
      month: 'long',
      // weekday: 'long',
      day: 'numeric'
    }
    // Полный список опций:
    // let options = {
    //   era: 'long',
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   weekday: 'long',
    //   timezone: 'UTC',
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   second: 'numeric'
    // };

    let month = currentDate.toLocaleString('ru', optionsShort);

    // год
    let year = currentDate.getFullYear()

    // час
    let hours = currentDate.getHours();

    const getHoursEnding = function (hours) {
      if ((hours === 1) || (hours === 21)) return ' час ';
      else if (((hours > 1) && (hours <= 4)) || ((hours > 21) && (hours <= 24))) return ' часа ';
      else return ' часов ';
    }
    let hoursEnding = getHoursEnding(hours);

    // минуты
    let minutes = currentDate.getMinutes();

    const getMinutesEnding = function (minutes) {
      if ([1, 21, 31, 41, 51].includes(minutes)) return ' минута ';
      else if ([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(minutes)) return ' минуты ';
      else return ' минут ';
    }
    let minutesEnding = getMinutesEnding(minutes);

    // секунды
    let seconds = currentDate.getSeconds();

    const getSecondsEnding = function (seconds) {
      if ([1, 21, 31, 41, 51].includes(seconds)) return ' секунда ';
      else if ([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(seconds)) return ' секунды ';
      else return ' секунд ';
    }
    let secondsEnding = getSecondsEnding(seconds);

    // вывод
    let d = 'Сегодня ' + week[numWeekDay] + ', ' + month + ' ' + year + ' года, ' + hours + hoursEnding + seconds + secondsEnding;
    document.getElementById('out').innerHTML = d;

    //     б) '04.02.2020 - 21:05:33'
    // 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)

    let shortDateText = currentDate.toLocaleString('ru').split(', ');

    shortDateText = shortDateText[0] + ' - ' + shortDateText[1];
    document.getElementById('out2').innerHTML = shortDateText;
  }, 1000);
}

// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду

main();

// uneversal function for checking word endings:

// function declOfNum (n, textForms) {
//   n = Math.abs(n) % 100;
//   let n1 = n % 10;
//   if (n > 10 && n < 20) { return textForms[2]; }
//   if (n1 > 1 && n1 < 5) { return textForms[1]; }
//   if (n1 == 1) { return textForms[0]; }
//   return textForms[2];
// }

// let d = `Сегодня ${week[numWeekDay]}, ${month} ${year} года ${hours} ${declOfNum(hours, ['час', 'часа ', 'часов'])} ${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`
// document.getElementById('out').innerHTML = d;
