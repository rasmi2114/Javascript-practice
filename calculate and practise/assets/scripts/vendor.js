const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

// Output result to the user
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

//logic for calculation
function writeToLog(operation, prevResult, number, newResult) {
  console.log(`${prevResult} ${operation} ${number} = ${newResult}`);
}

//calculator logic
function createAndWriteOutput(mathOperator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${mathOperator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); 
}