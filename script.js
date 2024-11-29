function operate(x, y, op){
  let result;
  console.log(x)
  console.log(y)
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
  console.log(result);
  num2 = result;
  operator.signal = 0; 
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
const ctrl_btns = document.querySelectorAll(".ctrl_btn");
const ctrl_operators = document.querySelectorAll(".ctrl_btn.operator");
// Calculator variables
let num1, num2, operator, multiplier, numbers;
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
num1 = 0
multiplier = 1;
operator = {
  symbol: '',
  signal: 0,
}

ctrl_btns.forEach(btn => {
  btn.addEventListener("click", btn => {
    showDigits(btn.target.getAttribute("value"));
  });
});

ctrl_operators.forEach(btn => {
  btn.addEventListener("click", btn => {
    if(operator.signal > 0) operate(num1, num2, operator.symbol);
    else {
      operator.symbol = btn.target.getAttribute("value");
      num2 = num1;
      operator.signal++;
      multiplier = 1;
      num1 = 0;
    }
  });
});

function showDigits(value){
  const display = document.querySelector(".display");
  if(display.textContent === '0')  display.textContent = '';
  display.textContent += value;
  // saving the current value
    if(numbers.includes(+value))
    {
    num1 += (+value * multiplier);
    multiplier *= 10;
  }
}
  