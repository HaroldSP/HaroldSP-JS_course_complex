/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'use strict'

let print1 = function () {
  console.log('Крот');
}
let print2 = function () {
  console.log('овце,');
}
let print3 = function () {
  console.log('жирафу,');
}
let print4 = function () {
  console.log('зайке');
}
let print5 = function () {
  console.log('голубые');
}
let print6 = function () {
  console.log('сшил');
}
let print7 = function () {
  console.log('фуфайки');
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let func1 = function () {
  print3(); // вызывается 3, через 250 мс, сообщение 3
};

let func2 = function () {
  func1(); // вызывается 3, через 250 мс,

  setTimeout(function () {
    print6(); // вызывается 7, через 250 + 1000 мс, сообщение 7
  }, 1000);
}

let func3 = function () {
  setTimeout(function () {
    func2();
    print4(); // вызывается 4, через 250 мс, сообщение 4
  }, 250);

  print2(); // вызывается 2, сообщение № 2
}

setTimeout(function () {
  print5(); // вызывается 5, через 500 мс, сообщение 5

  setTimeout(function () {
    print7(); // вызывается 6, через 500 + 750 мс, сообщение 6
  }, 750);
}, 500);

print1(); // вызывается 1, сообщение № 1

func3(); // вызывается 2
