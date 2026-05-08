/* new code while using If else statement to check for operator and perform calculation accordingly */

const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function calculateResult(calculationType){
  const enteredNumbar = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD') {
    currentResult += enteredNumbar;
    mathOperator = '+';
  } else if(calculationType === 'SUBTRACT'){
    currentResult -= enteredNumbar;
    mathOperator = '-';
  } else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredNumbar;
    mathOperator = '*';
  } else if(calculationType === 'DIVIDE'){
    currentResult /= enteredNumbar;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumbar);
  writeToLog(calculationType, initialResult, enteredNumbar, currentResult);
  
}

function add() {
  calculateResult('ADD');
}

function subtract(){
  calculateResult('SUBTRACT');
}

function multiply(){
  calculateResult('MULTIPLY');
}

function divide(){
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

