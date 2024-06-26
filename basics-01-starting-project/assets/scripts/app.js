let currentResult = 0;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforCalc, calcNumber) {
  const calcDesc = `${resultBeforCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesc);
}

function writeToLog(
  operationIdentifier,
  pervResult,
  operationNumber,
  newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        pervResult: pervResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){

  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    return;
  }

  
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';  
  }
  else if (calculationType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  }
  else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  }
  else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
