let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberBtns = document.querySelectorAll(".digits");
const operatorBtns = document.querySelectorAll(".operators");
const equalsBtn = document.getElementById("equals");
const allClearBtn = document.getElementById("allclear");
const clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
const lastOpScreen = document.getElementById("user-input");
const currentOpScreen = document.getElementById("result");

allClearBtn.addEventListener("click", clear);
clearBtn.addEventListener("click", deleteNumber);

numberBtns.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorBtns.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (
    currentOpScreen.textContent === "0" ||
    shouldResetScreen ||
    currentOpScreen.textContent === "ZERO DIV ER"
  ) {
    resetScreen();
  }
  currentOpScreen.textContent += number;
}

function setOperation(operator) {
  if (currentOpScreen.textContent === "") return;
  if (currentOperation !== null) {
    if (evaluate() === "zero") {
      lastOpScreen.textContent = "";
      return;
    }
  }
  firstOperand = currentOpScreen.textContent;
  currentOperation = operator;
  lastOpScreen.textContent = `${firstOperand} ${operator} `;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentOpScreen.textContent === "0") {
    currentOpScreen.textContent = "ZERO DIV ER";
    return "zero";
  }
  secondOperand = currentOpScreen.textContent;
  currentOpScreen.textContent = operate(
    currentOperation,
    firstOperand,
    secondOperand
  );
  lastOpScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
  currentOperation = null;
}

function clear() {
  currentOpScreen.textContent = "0";
  lastOpScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function resetScreen() {
  currentOpScreen.textContent = "";
  shouldResetScreen = false;
}

function deleteNumber() {
  currentOpScreen.textContent = currentOpScreen.textContent
    .toString()
    .slice(0, -1);
}

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
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "x":
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
