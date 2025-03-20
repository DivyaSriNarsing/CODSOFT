let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function setOperator(op) {
  if (currentInput === "") return; // Avoid setting operator without a number
  if (previousInput !== "") calculateResult(); // Calculate before setting a new operator
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculateResult() {
  if (previousInput === "" || currentInput === "") return; // Ensure both inputs are available
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  previousInput = "";
  document.getElementById("display").value = "";
}
