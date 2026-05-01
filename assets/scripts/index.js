
// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Example use
let tempC = 25;
let tempF = 77;

console.log(tempC + "°C = " + celsiusToFahrenheit(tempC) + "°F");
console.log(tempF + "°F = " + fahrenheitToCelsius(tempF) + "°C");

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
