function operate(x, y, op){
  switch(op){
    case " + ": result = add(y, x);
    break;
    case " - ": result = subtract(y, x);
    break;
    case " ÷ ": result = divide(y, x);
    break;
    case " x ": result = multiply(y, x);
    break;
  }
  lastValue = null;
  secondOperand = result;
  updateDisplayDigits(result);
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
  let display = document.querySelector(".display");
  if(display.textContent === '0') display.textContent = '';
  if(value === ".") {
    if(display.textContent.split('').includes('.')) return;
    display.textContent += value;
    lastValue = display.textContent;
    return;
  }
  if(lastValue === undefined || lastValue === null) {
    display.textContent = value;
    lastValue = value;
  }
  else{
    lastValue = lastValue + value;
    display.textContent = lastValue;
  }
}

function updateDisplayOperator(op) {
  const display = document.querySelector(".display");
  lastValue = null;
  display.textContent += op;
}   

function removeOperator(){
  const display = document.querySelector(".display");
  newString = display.textContent;
  newString = newString.split('');
  newString.splice(-3,3);
  display.textContent = newString.join('');
}

const ctrl_btns = document.querySelectorAll(".ctrl_btn.digit");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
const decimal = document.querySelector(".decimal");
// Calculator variables
let firstOperand, secondOperand, operator, result, lastValue;

// for each digit clicked, updateDisplay
ctrl_btns.forEach(btn => {
  btn.addEventListener("click", btn => {
    const digit = btn.target.getAttribute("value");
    updateDisplayDigits(digit);
    const display = document.querySelector(".display");
    firstOperand = +display.textContent;
  });
});

ctrl_operators.forEach(btn => {
  btn.addEventListener("click", btn => {
    // when clicked first time don't run operate
    if(lastValue === null) {
      operator = btn.target.getAttribute("value");
      removeOperator();
      updateDisplayOperator(operator);
      return;
    }
    if(secondOperand != undefined) operate(firstOperand, secondOperand, operator);
    else{
      secondOperand = firstOperand;
    }
    operator = btn.target.getAttribute("value");
    updateDisplayOperator(operator);
  });
});

decimal.addEventListener("click", btn => {
  updateDisplayDigits(btn.target.getAttribute("value"));
});

