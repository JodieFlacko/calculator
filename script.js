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
  }
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

function clearCalculator(x, y){
  return 0; 
}

// Display functions
function updateDisplayDigits(value){
  const display = document.querySelector(".display");
  if(display.textContent === '0') display.textContent = '';
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

const digitBtns = document.querySelectorAll(".ctrl_btn.digit");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
const decimal = document.querySelector(".decimal");
// Calculator variables
let firstOperand, secondOperand, operator, result, signal;
firstOperand = null; 
secondOperand = 0;
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

});

