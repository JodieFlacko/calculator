function operate(x, y, op){
  switch(op){
    case " + ": result = add(x, y);
    break;
    case " - ": result = subtract(x, y);
    break;
    case " ÷ ": result = divide(x, y);
    break;
    case " x ": result = multiply(x, y);
    break;
    case " % ": result = modulo(x, y);
    break;
  }
    if((result / 10000000000)  > 1) result = roundDecimals(result);
    firstOperand = result;
    signal = true;
  }

function add(x, y) {
  return x + y;
  }
  
function subtract(x, y) {
  return x - y;
  }
  
function divide(x, y) {
  return x / y;
  }
  
function multiply(x, y) {
  return x * y;
  }

function modulo(x, y){
  return x % y;
}

function clearCalculator(){
  const display = document.querySelector(".display");
  display.textContent = '0';
  secondOperand = firstOperand = result = operator = signal = null;
}

// Display functions
function updateDisplayDigits(value){
  const display = document.querySelector(".display");  
  if(display.textContent === '0' && value != '.') display.textContent = '';
  if(signal) {
    display.textContent = '';
    signal = false;
  }
  display.textContent += value;
  updateSecondOperand(+display.textContent);
  }

function updateSecondOperand(value) {
  secondOperand = value;
}
function roundDecimals(decimal){
  return decimal.toFixed(10);
}

function checkDecimalButton(string){
  return string.split('').includes('.');
}

function removeDigit(string){
  array = string.split('');
  array.pop()
  return array.join('');
}

const digitBtns = document.querySelectorAll(".ctrl_btn.digit");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".backspace")
// Calculator variables
// If signal is true, it means display content needs to be emptied
let firstOperand, secondOperand, operator, result, signal;
firstTime = true;
firstOperand = null; 
signal = false;

// for each digit clicked, updateDisplay
digitBtns.forEach(btn => {
  btn.addEventListener("click", btn => {
    const digit = btn.currentTarget.getAttribute("value");
    updateDisplayDigits(digit);
  });
});

ctrl_operators.forEach(btn => {
  btn.addEventListener("click", btn => {
    if(firstOperand != null){
      operate(firstOperand, secondOperand, operator)
      updateDisplayDigits(result);
      signal = true;
      operator = btn.currentTarget.getAttribute("value");
    }
    else{
      operator = btn.currentTarget.getAttribute("value");
      firstOperand = secondOperand;
      signal = true;
    }
  });
});

decimal.addEventListener("click", btn => {
  const dot = btn.currentTarget.getAttribute("value");
  const display = document.querySelector(".display");
  if(checkDecimalButton(display.textContent)) return;
  updateDisplayDigits(dot);
});

clear.addEventListener("click", () => {
  clearCalculator();
});

equal.addEventListener("click", () =>{
  if(firstOperand != null && secondOperand != null){
    operate(firstOperand, secondOperand, operator);
    updateDisplayDigits(result);
    secondOperand = null;
  }
});

backspace.addEventListener("click", () => {
  signal = true;
  const display = document.querySelector(".display");
  string = removeDigit(display.textContent);
  if (string === '') {
    string = '0';
  }

  updateDisplayDigits(string);
});
