import inquirer from "inquirer";
 const questions = await inquirer.prompt([{
    type: "input",
    name: "num1",
    message: "Enter first number",
 },
 {
    type: "input",
    name: "num2",
    message: "Enter Second number",
 },
 {
    type: "list",
    name: "operator",
    message: "Enter Operator",
    choices:['+','-','*','/']
 },
]);
function sum(num1:number, num2:number) {
    const result = num1 + num2;
    console.log(result);
}
function difference(num1:number, num2:number) {
    const result = num1 - num2;
    console.log(result);
}
function product(num1:number, num2:number) {
    const result = num1 * num2;
    console.log(result);
}
function division(num1:number, num2:number) {
    //const result = num1 / num2;
    //console.log(result);
    return num1 / num2;
}
if (questions.operator == "+"){
    console.log("Sum of two given numbers:",sum(questions.num1,questions.num2));
}
else if(questions.operator == "-"){
    console.log("Difference of two given numbers:",difference(questions.num1,questions.num1));
}
else if(questions.operator == "*"){
    console.log("Product of two given numbers:",product(questions.num1,questions.num2))
}
else if(questions.operator == "/"){
    console.log("division of two given numbers:",division(questions.num1,questions.num2))
}
else {
    console.log("Invalid Operator")
}