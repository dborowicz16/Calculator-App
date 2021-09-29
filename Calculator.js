#!usr/bin/env node

    // Constructs the readline module
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

    // Declares the variable "total" that holds the current calc total
let total = 0;

    // Declares the variable "symbol" that holds the operand the user inputs
let symbol;

    // Prints out welcome message
console.log("Welcome to Running Calc.js");

    // Runs the function that asks user to input a symbol
enterOperand()

    // Takes value input and adds it to the total if input is valid
function addUpdateTotal(value) {
    if (isNaN(value) == false) {
        total = parseFloat(total) + parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else {
        console.log("Value must be an integer!")
        operand();
    }
}

    // Takes value input and subtracts it from the total if input is valid
function subtractUpdateTotal(value) {
    if (isNaN(value) == false) {
        total = parseFloat(total) - parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else {
        console.log("Value must be an integer!")
        operand();
    }
}

    // Takes value input and multiplies it to the total if input is valid
function multiplyUpdateTotal(value) {
    if (isNaN(value) == false) {
        total = parseFloat(total) * parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else {
        console.log("Value must be an integer!")
        operand();
    }
}

    // Takes the value input and divides total by input if input is valid
function divideUpdateTotal(value) {
    if (value == 0) {
        console.log("Cannot divide by zero!")
        operand();
    }
    else if (isNaN(value) == false) {
        total = parseFloat(total) / parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else {
        console.log("Value must be an integer!")
        operand();
    }
}

    // Prompts user to input an operand and sends it to "operand" function
function enterOperand() {
    readline.question("Enter the operation (+-*/, q to quit):", (symbol) => { operand(symbol) });
}

    // Reads input and decides what to do with it depending on symbol inputted
function operand(symbol) {
    if (symbol == "q") {
        console.log("Final Value: " + total)
        readline.close()
    }
    else if (symbol == "+") {
        readline.question("Enter the value: ", (value) => { addUpdateTotal(value) });
    }
    else if (symbol == "-") {
        readline.question("Enter the value: ", (value) => { subtractUpdateTotal(value) });
    }
    else if (symbol == "/") {
        readline.question("Enter the value: ", (value) => { divideUpdateTotal(value) });
    }
    else if (symbol == "*") {
        readline.question("Enter the value: ", (value) => { multiplyUpdateTotal(value) });
    }
    else {
        console.log("Must enter +, -, *, /, or q");
        enterOperand()
    }
}
