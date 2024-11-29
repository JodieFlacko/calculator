function operate(num1, num2, operator){
  
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
const ctrl_digits = document.querySelectorAll(".ctrl_btn.digit");
// Calculator variables
let num1, num2, operator;
ctrl_digits.forEach(btn => {
  btn.addEventListener("click", btn => {
    showDigits(btn.target.getAttribute("value"));
  });
});


function showDigits(value){
  const display = document.querySelector(".display");
  if(display.textContent === '0')  display.textContent = '';
  display.textContent += value;
}
  