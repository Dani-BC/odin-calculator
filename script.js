const buttons = document.querySelectorAll(".btn");
let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let value1 = null;
let value2 = null;
let result = null;

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

updateDisplay();

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      clearDisplay();
      updateDisplay();
    } else if (e.target.id === "=") {
      inputEquals();
      updateDisplay();
    } else if (e.target.id === "number") {
      insertNumber(e.target.value);
      console.log(displayValue);
      updateDisplay();
    } else if (e.target.id === "+") {
      insertOperator(e.target.id);
      updateDisplay();
    } else if (e.target.id === "-") {
      insertOperator(e.target.id);
      updateDisplay();
    } else if (e.target.id === "/") {
      insertOperator(e.target.id);
      updateDisplay();
    } else if (e.target.id === "*") {
      insertOperator(e.target.id);
      updateDisplay();
    }
  });
});

function clearDisplay() {
  displayValue = "0";
  firstOperand = null;
  secondOperand = null;
  value1 = null;
  value2 = null;
  result = null;
}

function operate(x, y, op) {
  if (op === "+") {
    return x + y;
  } else if (op === "-") {
    return x - y;
  } else if (op === "*") {
    return x * y;
  } else if (op === "/") {
    if (y === 0) {
      return "lmao";
    } else {
      return x / y;
    }
  }
}

function insertNumber(operand) {
  if (value1 === null) {
    if (displayValue === "0") {
      displayValue = operand;
    } else if (displayValue === firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  } else {
    if (displayValue === firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
      console.log(displayValue);
    }
  }
}

function insertOperator(operator) {
  if (value1 != null && value2 === null) {
    value2 = operator;
    secondOperand = displayValue;
    result = operate(Number(firstOperand), Number(secondOperand), value1);
    displayValue = result;
    firstOperand = displayValue;
    result = null;
  } else if (value1 != null && value2 != null) {
    secondOperand = displayValue;
    result = operate(Number(firstOperand), Number(secondOperand), value2);
    value2 = operator;
    displayValue = result;
    firstOperand = displayValue;
    result = null;
  } else {
    value1 = operator;
    firstOperand = displayValue;
  }
}

function inputEquals() {
  if (value1 === null) {
    displayValue = displayValue;
  } else if (value2 != null) {
    secondOperand = displayValue;
    result = operate(Number(firstOperand), Number(secondOperand), value2);
    displayValue = result;
    firstOperand = displayValue;
    secondOperand = null;
    value1 = null;
    value2 = null;
    result = null;
  } else {
    secondOperand = displayValue;
    result = operate(Number(firstOperand), Number(secondOperand), value1);
    displayValue = result;
    firstOperand = displayValue;
    secondOperand = null;
    value1 = null;
    value2 = null;
    result = null;
  }
}

function clearDisplay() {
  displayValue = "0";
  firstOperand = null;
  secondOperand = null;
  value1 = null;
  value2 = null;
  result = null;
}
