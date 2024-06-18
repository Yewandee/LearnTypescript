"use strict";
// String
let lname;
lname = "Biobaku";
let newname = lname.toUpperCase();
console.log(newname);
// Number
let age;
age = 30;
age = 30.5;
let dob = "25";
let result = parseInt(dob);
console.log(result);
// Boolean
let isValid = false;
console.log(isValid);
// Array
let empList;
empList = ["Yewande", "Yewande2", "Yewande3"];
let emp = empList.find((emp) => emp === "Yewande");
console.log(emp);
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let results = numList.filter((num) => num > 2);
console.log(results);
let nums = numList.find((num) => num === 4);
console.log(nums);
let c = 2 /* Color.Blue */;
// Tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 40);
swapNumbs[0];
swapNumbs[1];
// Any
let department;
department = "IT";
department = 10;
