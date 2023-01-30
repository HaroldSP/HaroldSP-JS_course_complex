/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

// declaring a variable with a predetermined value
const num = 266219;

// switching that number to an array
let firstArray = numToArray(num);

// multiplication number by number of each element in the array
console.log(multiplicationNumberByNumber(firstArray));

// raising the result to the power of 3
let result = multiplicationNumberByNumber(firstArray) ** 3;

// printing the first 2 digits of the result into the console
let secondArray = numToArray(result);
console.log('The first two digits of the result are ' + secondArray[0] + ' and ' + secondArray[1]);

// ################################        functions        #######################################

function numToArray (n) {
  let i;
  let arr = [];

  while (n >= 10) {
    i = n % 10;
    arr.unshift(i);
    n /= 10;
    n = Math.floor(n);
  }
  i = n % 10;
  arr.unshift(i);

  return arr;
}

function multiplicationNumberByNumber (arr) {
  let product = 1;

  for (let element of arr) {
    product *= element;
  }

  return product;
}

/*
let num = 1000
let myArr = String(num).split('').map((num) => {
  return Number(num)
})
console.log(myArr)
*/
