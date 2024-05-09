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
function calculateArea(radius : number){
    console.log(`Area of the circle whose radius is ${radius} is : ${3.14*radius**2}`)
}
let radius = 2;
calculateArea(radius);
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
// Problem 11 Write a function that takes an array and returns a new array that start with the letter 'a'.                      
function newArray(parameter: string[]) {
    return parameter.filter( value => value.startsWith('a') || value.startsWith('A'));
  }
  
  const oldArray = ['Ali', 'Umer', 'Abubakar', 'javed', 'abdullah'];
  const wordsStartingWithA = newArray(oldArray);
  console.log(wordsStartingWithA);
// Problem 12 Create a script that logs the second to last element of an array named fruits.
const fruits = ['Apple', 'Avocado', 'Banana', 'Grapes','Mangoes'];
const newFruits =fruits.slice(1);// slice slices a new array from the original by given parameters 
console.log(newFruits);
// Problem 13 Develop a function that takes an array of numbers and returns a new array with each number squared.
const firstArray = [0,15,2,4,11,1]
function squaredArray(input: number[]){
    return input.map(num => num*num) // .map method is an array iteration method(every value in array is subjugated to a specific function)
}
const secondArray = squaredArray(firstArray);
console.log(secondArray)
// Problem 14 Reverse an array elements without using the .reverse() method.
let orgArray = [1,2,3,4,5]
function reverseArray(it:number[]){
    let reversed = []; // defining empty array to store value
    for(i = it.length - 1;i >= 0; i--){  // backward loop
        reversed.push(it[i]); // indexing last element of original array
    }
    return reversed;
} 
const aaa = reverseArray(orgArray);
console.log(aaa);
// Problem 15  write a function that logs the number of times the score exceeded maximum score & fell below the minimum score.
const scores = [10,5,20,20,4,5,2,25];
function maxOrminimum(pmt:number[]) {
    let maxScore = pmt[0]; // choosing first value to be the max value
    let minScore = pmt[0]; // choosing first value to be the min value
    let maxCount = 0;      // declaring a variable to count if new max value found   
    let minCount = 0;      // declaring a variable to count if new min value found
    for(i = 1; i < pmt.length; i++){    // i starts from 1 because at 0 index value is already chosen to be max or min.(base value)
        if(pmt[i]>maxScore){        //if new value is found to be greater than base value
            maxScore = pmt[i];      // update max value
            maxCount++;             // count it to log how many times value exceeded
        }
        else if(pmt[i]<minScore){   // if new value is found to be lesser than base value
            minScore = pmt[i];      // update minimum value
            minCount++;             // count how many times value fell below the base value
        }
    }
    console.log(`Score exceeded maximum score ${maxCount} times.`);//when every score analysed,number of times it exceeded max score
    console.log(`Score exceeded minimum score ${minCount} times.`);//when every score iterated,number of times it fell below minimum
    
}
maxOrminimum(scores); 
// Problem 16 Create a function that removes all falsey values from an array.
const falseyValueArr = [NaN, "", 0, false, null, undefined, "Hello there!"] //Array with falsey values
function removeFalseyValue(parameter: any[]){
    return parameter.filter(value => !!value); // Filtering the array to get new array with no falsey value
}
const notFalseyValueArray = removeFalseyValue(falseyValueArr); // storing the resultant array to a new array name
console.log(notFalseyValueArray);
// Problem 17 Concatenate two arrays
const arr1 = [1,2,3]; const arr2 = [4,5,6] // defining two arrays
const concatenatedArray = arr1.concat(arr2); // concat method
console.log(concatenatedArray);
// Problem 18 Develop a function called sumOfElements that calculates the sum of all elements in an array. either odd or even as an parameter
function sumOfElements(parameter: number[], Type: "Even" | "Odd") {  // two parameters one an input value of array and other string
    return parameter.reduce((acc,curr) => {        //.reduce method used acc stands for accumulator & curr is current value treated
        if(Type === "Even" && curr % 2 === 0){  // for even number value in the array
            return acc + curr;                  // accumulator value set to 0 added in current value which satisfies our condition
        }
        else if(Type === "Odd" && curr % 2 !== 0){ // for odd number value in array
            return acc + curr;                  // accumulator value set to 0 added in current value which satisfies our condition
        }
        else{
            return acc; // if number is neither even nor odd "0" value returns which is accumulators original value
        }

    },0); // 0 being acc value
}
console.log("Sum of Even numbers of array:",sumOfElements(concatenatedArray,"Even"));
console.log("Sum of Odd numbers of array:",sumOfElements(concatenatedArray,"Odd"));
// Problem 19 Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function indexOfElement(params:number[], element : any) { // Two parameters taken, an array of values & specific value
    const index = params.indexOf(element); // index.of function called on specific element
    return index !== -1 ? index : -1      // if index has a value & is not equal to -1 then return value otherwise return -1
}
console.log("index of given element is:",indexOfElement(concatenatedArray,4));
console.log("index of given element is:",indexOfElement(concatenatedArray,40));
// Problem 20 Write a function to find and return the smallest number in an array of integers.
const integerArr = [24,40,-15,105];
function smallestInteger(params:number[]) {
    let smallest = params[0];      // assuming first value to be smallest value
    for(i = 1; i < params.length; i++){
        if(params[i] < smallest)    // checking every value against first value to findout which is smaller
        smallest = params[i];    // updating smallest value
    }
    return smallest;
}
console.log(smallestInteger(integerArr));
// Problem 21 Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function productOfEveryElement(params:number[]) {
    return params.reduce((Sum,param)=>param*Sum ,1) //reduce function used to find sum of every element 
}
const product = productOfEveryElement(concatenatedArray);
console.log(product); 
// Problem 22 Develop a function filterByLength that takes an array of strings and a number n. 
const strArray = ["Aalo","dhania","piaaz","pudina","tamatar","mirch"];
function filterByLength(array:string[],n:number):string[]{  // input of string values in an array & a number n
    return array.filter(str=>str.length>n)       // filtering the array & applying length function to it's elements
}
console.log(filterByLength(strArray,5));
// Problem 23 Create a function findDuplicates that finds and logs all duplicates in an array.
const testArr = [1,2,2,3,3,3,4,5,5]; //Declaring & initializing random array
//  Pseudo Code
// 1. see all the values in an array
// 2. store the duplicate values in a set object
// 3. Usage of set object which is basically un ordered list of unique values assigned to it.
function findDuplicates(arr:any[]):void { // void type means function isn't returning any value. just executing
    const seen = new Set();          // set initiated
    const duplicates = new Set();
    arr.forEach((item) => {            // for each method implemented on given array to itteriate every element
        if(seen.has(item)){         // if check set already has the value being checked
            duplicates.add(item);   // add to the duplicate set.
        }
        else{
            seen.add(item);         // else just check & ignore(check by adding value to check list (seen set))     
        }
    });
    duplicates.forEach((duplicate)=>{     // values in set duplicate is itterated through for each & consoled
        console.log(duplicate); 
    })
    

}
findDuplicates(testArr);

// Problem 24 Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr:number[]): number[] {
    return arr.map(num => num + 1);    // .map method used to manipulate array values and returning new array
}
const incremented = incrementAll(testArr);
console.log(incremented);

//Problem 25 Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurances(arr : any[],specNum : any):number{
    let count = 0;
    for(num of arr){
        if(num === specNum){
            count++;
        }
        
    } 
    return count;
}
const countOf = countOccurances(testArr,9);
console.log(countOf);