function operate(x, y, op){
  let result;
  console.log(x)
  console.log()
  switch(op){
    case " + ": result = add(+y, +x.value);
    break;
    case " - ": result = subtract(+y, +x.value);
    break;
    case " ÷ ": result = divide(+y, +x.value);
    break;
    case " x ": result = multiply(+y, +x.value);
    break;
  }
  operator = null;
  resetOperand(firstOperand);
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
  const display = document.querySelector(".display");
  if(display.textContent === '0') display.textContent = '';
  firstOperand.value += (+value * firstOperand.multiplier);
  firstOperand.multiplier *= 10;
  display.textContent = firstOperand.value;
}

function updateDisplayOperator(op) {
  const display = document.querySelector(".display");
  display.textContent += op;
}  
function updateDisplayDigits(value){
  const display = document.querySelector(".display");
  if(display.textContent === '0') display.textContent = '';
  firstOperand.value += (+value * firstOperand.multiplier);
  firstOperand.multiplier *= 10;
  display.textContent = firstOperand.value;
}

function updateDisplayOperator(op) {
  const display = document.querySelector(".display");
  display.textContent += op;
}  

function resetOperand(operand){
  operand.value = 0;
  operand.multiplier = 1;
  return;
}

const ctrl_btns = document.querySelectorAll(".ctrl_btn.digit");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
// Calculator variables
let firstOperand, secondOperand, operator;
firstOperand = {
  value: 0,
  multiplier: 1,
};

// for each digit clicked, updateDisplay
ctrl_btns.forEach(btn => {
  btn.addEventListener("click", btn => {
    const displayValue = btn.target.getAttribute("value");
    updateDisplayDigits(displayValue);
  });
});

ctrl_operators.forEach(btn => {
  btn.addEventListener("click", btn => {
    if(operator != undefined && operator != null) operate(firstOperand, secondOperand, operator);
    secondOperand = firstOperand.value;
    resetOperand(firstOperand);
    operator = btn.target.getAttribute("value");
    updateDisplayOperator(operator);
  });
});

