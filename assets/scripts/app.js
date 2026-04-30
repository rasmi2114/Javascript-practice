const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

function sub() {
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, '');
}

function mul() {
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, '');
}

function div() {
  currentResult = currentResult / parseInt(userInput.value);
  outputResult (currentResult, ''); 
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);
