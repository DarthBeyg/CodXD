// DEclaring a function
function nameOffunction (){  //Roundbrackets used for parameters of function        
    //function body
}
function greet(){
    console.log(`Hello world`);
}
// function calling
greet();
// Declaring a funct with parameters
function greetWithParameters(name:string){
    console.log(`Hello there ${name}`)
}
greetWithParameters(`Ali`);
//Function with Return statement
function abc(){
    console.log(`This is abc function`)
    return 20;
}
const a = abc();
console.log(" ~ a function ", a);
// Arrays
// let , const array.Name=[];
let fruit0 = 'Apple';
let fruit1 = 'Orange';
let fruit2 = 'Banana';
const fruits = ['Apples', 'Oranges', 'Bananas'];
console.log(fruits);
//Print Array values : arrayName[index]
console.log(fruits[0]); console.log(fruits[1]);
//Array methods
//1. push(adds) add at the end
fruits.push('Mangoes');
console.log(fruits);


//2. Pop(deletes) deletes at the end
fruits.pop();
console.log(fruits);


//3. Unshift(adds) adds at the start
fruits.unshift('Cherries');
console.log(fruits);
//4. shift(deletes) removes from the start
fruits.shift();
console.log(fruits);
const fruits1 = ['Apples', 'Oranges', 'Bananas','Apples1','Bananas1','Oranges1'];
//3. Splice(adds) adds from a specific index  but also manipulates original array 
fruits1.splice(1,0,'cherries');
console.log(fruits1);
fruits1.splice(1,6,'Watermelons');
console.log(fruits1)