/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

const num = 266219;
const firstArray = num.toString();
// console.log(firstArray, typeof firstArray);
// console.log(firstArray.length, typeof firstArray.length);
let product = 1;

for (let i = 0; i < firstArray.length; i += 1) {
  product *= firstArray[i];
// console.log(firstArray[i], typeof firstArray[i]);
}
// console.log(product, typeof product);
let multDegre = product ** 3;
console.log(String(multDegre).slice(0, 2));
