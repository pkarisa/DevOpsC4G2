const additionFunction = (inputOne, inputTwo) => {
    return inputOne + inputTwo;
}
const subtractionFunction = (inputOne, inputTwo) => {
    return inputOne - inputTwo;
}
const multiplicationFunction = (inputOne, inputTwo) => {
    return inputOne * inputTwo;
}
const divisionFunction = (inputOne, inputTwo) => {
    return inputOne / inputTwo;
}

const myCalculatorProgram = () => {
    // Retrieve HTML elements by their IDs
    const numberOneElement = document.getElementById('one');
    const numberTwoElement = document.getElementById('two');
    const numberThreeElement = document.getElementById('operation');

    // Ask user for input one
    const numberOne = numberOneElement.value;
    // Ask user for input two
    const numberTwo = numberTwoElement.value;
    // Ask user for operation they want to be done
    const operation = numberThreeElement.value; // +,-,*,/;
    // Perform the operation based on the type specified above
    let result;
    if (operation == '+') {
        result = additionFunction(numberOne, numberTwo)
    }
    if (operation == '-') {
        result = subtractionFunction(numberOne, numberTwo)
    }
    if (operation == '*') {
        result = multiplicationFunction(numberOne, numberTwo)
    }
    if (operation == '/') {
        result = divisionFunction(numberOne, numberTwo)
    }
    // alert('Based on your operation',operation,'The result is', result);

    // Get the result element
    const resultElement = document.getElementById('result')
    resultElement.textContent = result
}
