"use strict";
let year = 2023; // Replace with the year you want to check
// A year is a leap year if it is divisible by 4 but not by 100, unless it's also divisible by 400
let isLeapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}.`);
