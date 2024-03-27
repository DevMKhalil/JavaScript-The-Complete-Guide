let currentResult = 0;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforCalc,calcNumber) {
    const calcDesc = `${resultBeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesc);
}

function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}

addBtn.addEventListener('click',add);

subtractBtn.addEventListener('click',subtract);

multiplyBtn.addEventListener('click',multiply);

divideBtn.addEventListener('click',divide);

