"use strict";
//Easy
//Problem 1 write a script to log "Hello, World!"
console.log(`Hello, World!`);
// Problem 2 create a variable "temperature" then log if it's cold
let temperature = 15;
if (temperature < 20) {
    console.log(`It's cold!`);
}
// Problem 3 Use arithmetic operators to solve problem
let appleCount = 10;
console.log(`If I give away three apples i now have: ${appleCount - 3}`);
// Problem 4 Declare two variables then third variable to log full name
let firstName = 'Ali';
let secondName = 'Bhai';
let lastName = console.log(`${firstName}  ${secondName}`);
// Problem 5 Comparison operator
let num = 5;
if (num > 3) {
    console.log("Yes");
}
else
    console.log("NO");
//Medium
// Problem 6 Create a function "calculateArea" & find area of a circle
function calculateArea(radius) {
    console.log(`Area of the circle whose radius is ${radius} is : ${3.14 * radius ** 2}`);
}
let radius = 2;
calculateArea(radius);
// Problem 7 Write a loop that logs number 1 to 50
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
//Problem 8 Find & log Highest temperature
const temp = [5, 15, 10, 25, 40];
const highTemp = Math.max(...temp); //"..." expands the several input of an array into individual values for math.max function to evaluate
console.log("Highest temperature in degree celsius:", highTemp);
// Problem 9 log minor or adult
let age = 17;
if (age >= 18) {
    console.log("You are an adult");
}
else
    console.log("You are a minor(under 18)");
// Problem 10 write a function that returns count of positive numbers in an array
const testArray = [14, -5, 25, 0, 15];
function positiveNumbers(num) {
    let count = 0;
    for (let number of num) {
        if (number > 0) {
            count++;
        }
    }
    return count;
}
const count = positiveNumbers(testArray);
console.log(`Positive numbers in the array : ${count}`);
//Arrays & Array methods.
// Problem 11 Write a function that takes an array and returns a new array that start with the letter 'a'.                      
function newArray(parameter) {
    return parameter.filter(value => value.startsWith('a') || value.startsWith('A'));
}
const oldArray = ['Ali', 'Umer', 'Abubakar', 'javed', 'abdullah'];
const wordsStartingWithA = newArray(oldArray);
console.log(wordsStartingWithA);
// Problem 12 Create a script that logs the second to last element of an array named fruits.
const fruits = ['Apple', 'Avocado', 'Banana', 'Grapes', 'Mangoes'];
const newFruits = fruits.slice(1); // slice slices a new array from the original by given parameters 
console.log(newFruits);
// Problem 13 Develop a function that takes an array of numbers and returns a new array with each number squared.
const firstArray = [0, 15, 2, 4, 11, 1];
function squaredArray(input) {
    return input.map(num => num * num); // .map method is an array iteration method(every value in array is subjugated to a specific function)
}
const secondArray = squaredArray(firstArray);
console.log(secondArray);
// Problem 14 Reverse an array elements without using the .reverse() method.
let orgArray = [1, 2, 3, 4, 5];
function reverseArray(it) {
    let reversed = []; // defining empty array to store value
    for (i = it.length - 1; i >= 0; i--) { // backward loop
        reversed.push(it[i]); // indexing last element of original array
    }
    return reversed;
}
const aaa = reverseArray(orgArray);
console.log(aaa);
// Problem 15  write a function that logs the number of times the score exceeded maximum score & fell below the minimum score.
const scores = [10, 5, 20, 20, 4, 5, 2, 25];
function maxOrminimum(pmt) {
    let maxScore = pmt[0]; // choosing first value to be the max value
    let minScore = pmt[0]; // choosing first value to be the min value
    let maxCount = 0; // declaring a variable to count if new max value found   
    let minCount = 0; // declaring a variable to count if new min value found
    for (i = 1; i < pmt.length; i++) { // i starts from 1 because at 0 index value is already chosen to be max or min.(base value)
        if (pmt[i] > maxScore) { //if new value is found to be greater than base value
            maxScore = pmt[i]; // update max value
            maxCount++; // count it to log how many times value exceeded
        }
        else if (pmt[i] < minScore) { // if new value is found to be lesser than base value
            minScore = pmt[i]; // update minimum value
            minCount++; // count how many times value fell below the base value
        }
    }
    console.log(`Score exceeded maximum score ${maxCount} times.`); //when every score analysed,number of times it exceeded max score
    console.log(`Score exceeded minimum score ${minCount} times.`); //when every score iterated,number of times it fell below minimum
}
maxOrminimum(scores);
// Problem 16 Create a function that removes all falsey values from an array.
const falseyValueArr = [NaN, "", 0, false, null, undefined, "Hello there!"]; //Array with falsey values
function removeFalseyValue(parameter) {
    return parameter.filter(value => !!value); // Filtering the array to get new array with no falsey value
}
const notFalseyValueArray = removeFalseyValue(falseyValueArr); // storing the resultant array to a new array name
console.log(notFalseyValueArray);
// Problem 17 Concatenate two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; // defining two arrays
const concatenatedArray = arr1.concat(arr2); // concat method
console.log(concatenatedArray);
// Problem 18 Develop a function called sumOfElements that calculates the sum of all elements in an array. either odd or even as an parameter
function sumOfElements(parameter, Type) {
    return parameter.reduce((acc, curr) => {
        if (Type === "Even" && curr % 2 === 0) { // for even number value in the array
            return acc + curr; // accumulator value set to 0 added in current value which satisfies our condition
        }
        else if (Type === "Odd" && curr % 2 !== 0) { // for odd number value in array
            return acc + curr; // accumulator value set to 0 added in current value which satisfies our condition
        }
        else {
            return acc; // if number is neither even nor odd "0" value returns which is accumulators original value
        }
    }, 0); // 0 being acc value
}
console.log("Sum of Even numbers of array:", sumOfElements(concatenatedArray, "Even"));
console.log("Sum of Odd numbers of array:", sumOfElements(concatenatedArray, "Odd"));
// Problem 19 Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function indexOfElement(params, element) {
    const index = params.indexOf(element); // index.of function called on specific element
    return index !== -1 ? index : -1; // if index has a value & is not equal to -1 then return value otherwise return -1
}
console.log("index of given element is:", indexOfElement(concatenatedArray, 4));
console.log("index of given element is:", indexOfElement(concatenatedArray, 40));
// Problem 20 Write a function to find and return the smallest number in an array of integers.
const integerArr = [24, 40, -15, 105];
function smallestInteger(params) {
    let smallest = params[0];
    for (i = 1; i < params.length; i++) {
        if (params[i] < smallest)
            smallest = params[i];
    }
    return smallest;
}
console.log(smallestInteger(integerArr));
