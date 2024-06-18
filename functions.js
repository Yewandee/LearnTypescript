"use strict";
// Name Function / Optional Parameters
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
// Arrow Function / Required Parameters
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(10, 2, 8));
// Function
const mult = function (num1, num2) {
    return num1 * num2;
};
// Rest Parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[1, 2, 3, 4]));
console.log(add2(2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
// Generic Function
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d"]);
