// Calculator variables
let num1, num2, operator;

const add = function(x, y) {
    return x + y;
  };
  
  const subtract = function(x, y) {
    return x - y;
  };
  
  const sum = function(array) {
    return array.reduce((total, item) =>{
      return total + item;
    }, 0)
  };
  
  const multiply = function(array) {
    return array.reduce((total, item) =>{
      return total * item;
    })
  };
  