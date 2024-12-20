function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value ? parseFloat(value) : NaN;
}

function calculate() {
    const number1 = getInputValue('number1');
    const number2 = getInputValue('number2');
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.innerHTML = "Please enter valid numbers.";
        resultDiv.style.display = "block";
        return;
    }

    let result;
    switch (operator) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            if (number2 === 0) {
                resultDiv.innerHTML = "Division by zero is not allowed.";
                resultDiv.style.display = "block";
                return;
            }
            result = divide(number1, number2);
            break;
        default:
            resultDiv.innerHTML = "Invalid operation.";
            resultDiv.style.display = "block";
            return;
    }

    resultDiv.innerHTML = `Result: ${result.toFixed(2)}`;
    resultDiv.style.display = "block";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
