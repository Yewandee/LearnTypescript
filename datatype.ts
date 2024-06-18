// String
let lname : string;

lname = "Biobaku";

let newname =lname.toUpperCase();
console.log(newname)

// Number
let age: number;

age = 30;
age = 30.5;

let dob = "25"

let result = parseInt(dob)
console.log(result)

// Boolean
let isValid: boolean = false
console.log(isValid)

// Array
let empList: string[];
empList = ["Yewande", "Yewande2", "Yewande3"]

let emp = empList.find((emp) => emp === "Yewande")
console.log(emp)

let numList : Array<number>;
numList = [1,2,3,4,5,6,7,8,9]

let sum = numList.reduce((acc, num) => acc + num)
console.log(sum)    

let results = numList.filter((num)=> num > 2)
console.log(results)
let nums = numList.find((num) => num === 4)
console.log(nums)

// enum
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue

// Tuples
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number) : [number, number] {
    return[num1, num2]
}

swapNumbs = swapNumbers(10, 40);

swapNumbs[0];
swapNumbs[1];


// Any

let department: any;

department = "IT"
department = 10;

