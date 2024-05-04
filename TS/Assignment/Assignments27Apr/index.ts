                                  //Easy
//Problem 1 write a script to log "Hello, World!"
console.log(`Hello, World!`)
// Problem 2 create a variable "temperature" then log if it's cold
let temperature = 15;
if(temperature<20){
    console.log(`It's cold!`)
}
// Problem 3 Use arithmetic operators to solve problem
let appleCount = 10;
console.log(`If I give away three apples i now have: ${appleCount - 3}`)
// Problem 4 Declare two variables then third variable to log full name
let firstName = 'Ali';
let secondName = 'Bhai';
let lastName = console.log(`${firstName}  ${secondName}`);
// Problem 5 Comparison operator
let num = 5;
if(num > 3){
    console.log("Yes")
}
else console.log("NO")
                                   //Medium
// Problem 6 Create a function "calculateArea" & find area of a circle
function calculateArea(r : number){
    console.log(`Area of the circle whose radius is ${r} is : ${3.14*r**2}`)
}
calculateArea(2);
// Problem 7 Write a loop that logs number 1 to 50
let i;
for(i = 1; i<=50; i++){
    if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0){
        console.log("buzz");
    }
else console.log(i);    
}    
//Problem 8 Find & log Highest temperature
const temp = [5,15,10,25,40]
const highTemp = Math.max(...temp) //"..." expands the several input of an array into individual values for math.max function to evaluate
console.log("Highest temperature in degree celsius:",highTemp);
// Problem 9 log minor or adult
let age = 17;
if(age>=18){
    console.log("You are an adult");
}
else console.log("You are a minor(under 18)");
// Problem 10 write a function that returns count of positive numbers in an array
const testArray  = [14,-5,25,0,15]
function positiveNumbers(num: number[]) {
    let count = 0;
    for(let number of num){
        if (number>0){
            count++;
        }
    }
    return count;
}
const count = positiveNumbers(testArray);
console.log(`Positive numbers in the array : ${count}`);
                      //Arrays & Array methods.
// Problem 11                       
