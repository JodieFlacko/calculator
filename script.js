function operate(x, y, op){
  let result;
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
  console.log(result)
  secondOperand = result;
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
const ctrl_btns = document.querySelectorAll(".ctrl_btn.digit");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
// Calculator variables
let firstOperand, secondOperand, operator, multiplier, numbers, lastValue, symbols;
symbols = [" + ", " x ", " - ", " ÷ "  ];
lastValue = 0;
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
firstOperand = 0
multiplier = 1;
operator = '';
// for each digit clicked, updateDisplay
ctrl_btns.forEach(btn => {
  btn.addEventListener("click", btn => {
    updateDisplay(btn.target.getAttribute("value"));
  });
});

ctrl_operators.forEach(btn => {
  btn.addEventListener("click", btn => {
    const operatorSymbol = btn.target.getAttribute("value");
    
    // change operator when an operator has already been clicked and displayed  
    if(!numbers.includes(lastValue)) {
      if(lastValue != operatorSymbol){
        operator = operatorSymbol;
        changeOperator(operator);
      }
      return;
    }
    updateDisplay(operatorSymbol);
    if(operator === '') {
      secondOperand = firstOperand;

    }
    else {
      operate(firstOperand, secondOperand, operator);
    }
    operator = btn.target.getAttribute("value");
    // reset firstOperand
    multiplier = 1;
    firstOperand = 0; 
    lastValue = btn.target.getAttribute("value");
  });
});

function updateDisplay(value){
  const display = document.querySelector(".display");
  // empty display
  if(display.textContent === '0')  display.textContent = '';
  // update display
  display.textContent += value;
  // saving the current value as firstOperand
    if(numbers.includes(+value))
    {
    firstOperand = ((+value * multiplier) + firstOperand);
    multiplier *= 10;
    lastValue = +value;
    }
}

function changeOperator(op){
  const display = document.querySelector(".display");
  displayTextContent = display.textContent;
  displayTextContent = displayTextContent.split('');
  displayTextContent.splice(-3,3, op);
  displayTextContent = displayTextContent.join('');
  lastValue = op;
  display.textContent = displayTextContent;
}
  