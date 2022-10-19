// if (1 == 1) {
//     console.log('HERE')
// } else {
//     console.log('THERE')
// }

// Functions
// Individual piece of work
// Syntax of a function
// Method
// const myFirstFunction = () => {}

// DECLARATION
// Function with no inputs
const myFirstFunction = () => { }
// Function with one input
const mySecondFunction = (inputOne) => { }
// Function with one input
const myThirdFunction = (inputOne, inputTwo) => { }

const additionFunction = (numberOne, numberTwo) => {
    const result = numberOne + numberTwo;
    // Declare output
    return result;
}

const subtractionFunction = (numberOne, numberTwo) => {
    const result = numberOne - numberTwo;
    return result;
}

// USAGE / CALL
const add = additionFunction(1, 2)
const sub = subtractionFunction(100, 50);

console.log('Add', add)
console.log('Subtract', sub)

// Take input, do something, but not return anything
const func1 = (input) => {
    console.log('Input, no output')
}
// Takes input, does something and returns output
const func2 = (input) => {
    console.log('Input, no output')
    return input;
}
// Takes no input, does something, returns no output
const func3 = () => {
    console.log('Hello')
}
// Takes no input, does something, returns an output
const func4 = () => {
    console.log('Input, no output')
    return 'No output';
}

// Scenario
// Login - email, password -> return 'logged in'
// Block a user on your system -> id input -> block action
// Greeting -> func3

// Expressions
// == -> Equality
// != -> Inequality
// > greater than
// < lesser than