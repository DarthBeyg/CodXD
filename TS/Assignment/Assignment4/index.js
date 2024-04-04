"use strict";
let greeting; // Declared variable "greeting" with string value annotation 
greeting = "Hello, World!"; // Initialized
console.log(greeting); // Printing greeting (Problem #1 Solved)
let num1 = 1;
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
let random = "Alpha"; // creating string variable
//random = true; // cannot assign boolean value to string variable
//random = 1;    // cannot assign number value to string variable (Problem #4 Solved)
console.log("Remainder of two numbers using % operator:" + " " + num1 % num2); // using modulus operator to find the remainder of two numbers (Problem #5 Solved)
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
}
