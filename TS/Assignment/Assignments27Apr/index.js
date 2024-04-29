"use strict";
//Easy
//Problem 1
console.log(`Hello, World!`);
//Problem 2
let temperature = 15;
if (temperature < 20) {
    console.log(`It's cold!`);
}
//Problem 3
let appleCount = 10;
console.log(`If I give away three apples i now have: ${appleCount - 3}`);
//Problem 4
let firstName = 'Ali';
let secondName = 'Bhai';
let lastName = console.log(`${firstName}  ${secondName}`);
//Problem 5
let num = 5;
if (num > 3) {
    console.log("Yes");
}
else
    console.log("NO");
//Medium
//Problem 6
function calculateArea(r) {
    console.log(`Area of the circle whose radius is ${r} is : ${3.14 * r ** 2}`);
}
calculateArea(2);
//Problem 7
let i;
for (i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("fizz");
    }
    else if (i % 5 == 0) {
        console.log("buzz");
    }
    else
        console.log(i);
}
//Problem 8
const temp = [5, 15, 10, 25, 40];
const highTemp = Math.max(...temp);
console.log(highTemp);
