function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return sum(a, b);
    case '-':
      return subtract(b, b);
    case '/':
      return divide(a, b);
    case '*':
      return multiply(a, b);
    default:
      return null;
  }
}

let firstDigit = '';
let secondDigit = '';
let operator = '';

const buttons = document.querySelector(".calc-buttons");
const display = document.querySelector(".calc-display");

function updateDisplay() {
  if (operator) {
    display.textContent = `${firstDigit} ${operator} ${secondDigit}`;
  } else {
    display.textContent = `${firstDigit}`;
  }
}

buttons.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("button")) return;

  if (target.classList.contains("clear")) {
    firstDigit = '';
    secondDigit = '';
    operator = '';
    display.textContent = '';
    return
  }


  //get number inputs 
  if (target.classList.contains("digit")) {
    if (!operator) {
      firstDigit += target.textContent;
    } else {
      secondDigit += target.textContent;
    }
  }

  //get operator inputs
  if (target.classList.contains("operator")) {
    if (firstDigit && secondDigit) {
      const result = operate(Number(firstDigit), Number(secondDigit), operator);
      firstDigit = String(result);
      secondDigit = '';
    }
    operator = target.textContent;
  }
  if (target.classList.contains("equals")) {
    if (firstDigit && secondDigit && operator) {
      const result = operate(Number(firstDigit), Number(secondDigit), operator);
      firstDigit = String(result);
      secondDigit = '';
      operator = '';
    }
  }

  updateDisplay();
})