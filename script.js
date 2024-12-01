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
    default: break;
  }
    if((result / 10000000000)  > 1) result = roundDecimals(result);
    firstOperand = result;
    signal = true;
    return result;
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
  secondOperand = firstOperand = result = operator = null;
}

// Display functions
function updateDisplayDigits(value){
  const display = document.querySelector(".display");
  displayContent = display.textContent;
  if(displayContent.split('').includes('.') && value === '.') return; 
  if(display.textContent === '0' && value != '.') display.textContent = '';
  if(signal === true) {
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

const digitBtns = document.querySelectorAll(".ctrl_btn.digit");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
// Calculator variables
let firstOperand, secondOperand, operator, result, signal;
firstOperand = null; 
signal = false;

// for each digit clicked, updateDisplay
digitBtns.forEach(btn => {
  btn.addEventListener("click", btn => {
    if(result != null) {
      signal = true;
      result = null;
    }
    digit = btn.currentTarget.getAttribute("value");
    updateDisplayDigits(digit);
  });
});

ctrl_operators.forEach(btn => {
  btn.addEventListener("click", btn => {
    if(firstOperand != null){
      updateDisplayDigits(operate(firstOperand, secondOperand, operator));
      operator = btn.currentTarget.getAttribute("value");
      return; 
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
  updateDisplayDigits(dot);
});

clear.addEventListener("click", () => {
  clearCalculator();
});