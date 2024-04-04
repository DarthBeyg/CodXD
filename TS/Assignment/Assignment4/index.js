"use strict";
let greeting; // Declared variable "greeting" with string value annotation 
greeting = "Hello, World!"; // Initialized
console.log(greeting); // Printing greeting (Problem #1 Solved)
let num1 = 4;
let num2 = 2;
num1 + num2; // Calculating sum
num1 - num2; // Calculating difference
num1 * num2; // Calculating product
num1 / num2; // Calculating quotient (Problem #2 Solved)
let a = 1; // Defining variable "a" 
let b = 2; // Defining variable "b"
a = a * b; // to swap value of a with b
b = a / b; // to swap value of b with a
a = a / b; // to swap value of b with a (Problem #3 Solved)
let message; // declaring string variable
//random = true; // cannot assign boolean value to string variable
//random = 1;    // cannot assign number value to string variable (Problem #4 Solved)
console.log(`Remainder of ${num1} & ${num2} using % operator:  ${num1 % num2}`); // using modulus operator to find the remainder of two numbers (Problem #5 Solved)
let counter = 0; // Declaring a variable
counter += 1; // Incrementing the value by 1 
counter++; // Incrementing the value by 1
counter = counter + 1; // Incrementing the value by 1 (Problem #6 solved)
let aa = true; // giving boolean value
let bb = false; // giving boolean value
let cc = true; // giving boolean value
aa && bb && cc; // AndGate expression
aa || bb || cc; // OrGate expression 
!aa;
!bb;
!cc; // NotGate expression (Problem #7 Solved)
let num = 10; // Declaring the variable
num += 1; //compound assignment operator +=
num -= 1; //compound assignment operator -=
num *= 1; //compound assignment operator *=
num /= 1; //compound assignment operator /= (Problem #8 Solved)
let numX = 10; //Determine if Even or odd
let ans = numX % 2; // Finding if remainder is 0 or not
if (ans === 0) {
    console.log(`${numX} is even number`);
}
else {
    console.log(`${numX} is odd number`);
} // Found if number is odd or even (Problem #9 Solved)
let age; // Voting eligiblity
let currentYear = 2024;
let yearBorn = 2004;
age = currentYear - yearBorn; // determining how old.
if (age >= 18) {
    console.log(`Yes. You're eligible to vote`); // Declaring eligible because 18 or older. 
}
else {
    console.log(`Sorry. you are not eligible to vote`); // Declaring ineligible because not 18 or older.
} //  Problem #10 solved.
let score = 45; // Grading System
let grade; // string variable to assign grade
grade = score >= 90 ? 'Your Grade is A' : //condition to assign A grade
    score >= 80 ? 'Your Grade is B' : //condition to assign B grade
        score >= 70 ? 'Your Grade is C' : //condition to assign C grade
            score >= 60 ? 'Your Grade is D' : 'Your Grade is F'; // condition to assign D grade or else F grade.
console.log(grade); // Printing the grade (Problem #11 solved)
let x = 23;
let y = 23;
let z = 44; //Max of three
if (x >= y && x >= z) {
    console.log(`${x} is the greater number`); //Determining if x is the greater number
}
else if (y >= x && y >= z) {
    console.log(`${y} is the greater number`); //Determining if y is the greater number
}
else {
    console.log(`${z} is the greater number`); //Determining if z is the greater number
} // Problem #12 solved
let year = 2024; //leap year checker
let leapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); // checking if the given year is divisible by 4 and not by 100, if it is then it must also be divisible by 400
if (leapYear == true) {
    console.log(`${year} is a leap year.`); // printing the determined result
}
else {
    console.log(`${year} is not a leap year`); // printing the determined result
} // Problem #13 solved
let tempFahrenheit = 68; //declaring a variable for Fahrenheit value
let tempCelsius; // declaring a variable for celsius value
tempCelsius = (tempFahrenheit - 32) * 5 / 9; // fahrenheit to celsius conversion formula 
console.log(`Temperature in celsius is ${tempCelsius}`); //Printing the result(Problem #14 solved)
let numY = -450; //declaring a variable to check if a number is positive, negative or zero.
if (numY > 0) { //condition for positive number
    console.log(`${numY} is a positive number`);
}
else if (numY < 0) { //condition for negative number
    console.log(`${numY} is a negative number`);
}
else { // If the number is 0
    console.log("The number is 0.");
} // Problem #15 solved
let givenNumber = 1; //Multiplication table for any given number
console.log(`${givenNumber} X 1 = ${givenNumber * 1}`);
console.log(`${givenNumber} X 2 = ${givenNumber * 2}`);
console.log(`${givenNumber} X 3 = ${givenNumber * 3}`);
console.log(`${givenNumber} X 4 = ${givenNumber * 4}`);
console.log(`${givenNumber} X 5 = ${givenNumber * 5}`);
console.log(`${givenNumber} X 6 = ${givenNumber * 6}`);
console.log(`${givenNumber} X 7 = ${givenNumber * 7}`);
console.log(`${givenNumber} X 8 = ${givenNumber * 8}`);
console.log(`${givenNumber} X 9 = ${givenNumber * 9}`);
console.log(`${givenNumber} X 10 = ${givenNumber * 10}`); // Problem #16 solved.
