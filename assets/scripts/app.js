/* new code while using If else statement to check for operator and perform calculation accordingly */

const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getuserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function calculateResult(calculationType){
  const enteredNumbar = getuserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD') {
    currentResult += enteredNumbar;
    mathOperator = '+';
  } else if(calculationType === 'SUBTRACT'){
    currentResult -= enteredNumbar;
    mathOperator = '-';
  }

}


/*  old code for caluculator app, now using OOP approach with classes and objects
const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide); 
*/
