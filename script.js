let numberOne = "";
let numberTwo = "";
let currentOperator = "";
resultWindow = document.querySelector("#results-id");

//operator functions
function add(a, b) {
  return a + b;
}
function subtract (a, b) {
  return b - a;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b / a;
}
//take inputs and push through operator
function operate(a, b, operator) {
  switch(operator) {
    case "add": return add(a, b);
    break;
    case "subtract": return subtract(a, b);
    break;
    case "multiply": return multiply(a, b);
    break;
    case "divide": return divide(a, b);
    break;
  }
}

//function to create event listeners fore each digit
function digitListeners (num) {
  num = num.toString();
  let idName = "digit-" + num;
  document.getElementById(idName).addEventListener("click", function() {
    numberOne = numberOne + num
    resultWindow.textContent = numberOne;
  }, false);
}

for (let i = 0; i <= 9; i++){ //iterate through all digits 0-9
  digitListeners(i);
};

function operatorListeners (operator) {
  let idName = "operator-" + operator;
  document.getElementById(idName).addEventListener("click", function() {
    if (numberTwo == "") {
    numberTwo = numberOne;
    currentOperator = operator;
    numberOne = "";
  } else if (currentOperator == "") {
      currentOperator = operator;
  } else if (numberTwo != "") {
    numericOne = parseInt(numberOne, 10);
    numericTwo = parseInt(numberTwo, 10);
    numberTwo = operate(numericOne, numericTwo, currentOperator);
    resultWindow.textContent = numberTwo;
    currentOperator = operator;
    numberOne = "";
  }
  }, false);
}
operatorListeners("add");
operatorListeners("subtract");
operatorListeners("multiply");
operatorListeners("divide");
//listeners for operators

document.getElementById("solve").addEventListener("click", function() {

  if (currentOperator != "") {
 if (numberTwo == "") {
  numberTwo = numberOne;
  numberOne = "";
  resultWindow.textContent = numberTwo;
} else if (numberTwo != "") {
  numericOne = parseInt(numberOne, 10);
  numericTwo = parseInt(numberTwo, 10);
  numberTwo = operate(numericOne, numericTwo, currentOperator);
  resultWindow.textContent = numberTwo;
  currentOperator = "";
  numberOne = "";
}
}
}, false);
document.getElementById("clear").addEventListener("click", function() {
numberOne = "";
numberTwo = "";
currentOperator = "";
resultWindow.textContent = "";
}, false);
