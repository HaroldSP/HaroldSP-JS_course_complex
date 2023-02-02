/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

let foo = function (arg) {
  if (arg === String(arg)) {
    arg = arg.trim().slice(0, 30);
    console.log(arg + '...');
  } else {
    alert('В коде ошибка. Функция "foo" принимает в качестве аргумента только строковый тип данных. Исправьте страницу и перезагрузите страницу');
  }
}

foo(' 012345678901234567890123456789тутначинаются символы 30+ '); // ожидаем вывод 012345678901234567890123456789...
