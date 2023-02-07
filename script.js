const numberBtns = document.querySelectorAll(".digits");
const operatorBtns = document.querySelectorAll(".operators");
const equalsBtn = document.getElementById("equals");
const allClearBtn = document.getElementById("allclear");
const clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
const userInput = document.getElementById("user-input");
const resultScreen = document.getElementById("result");

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
      break;
    case "%":
      return remainder(a, b);
      break;
    default:
      return null;
  }
}
