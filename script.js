//--Samir Hassan -->

const displayArea = document.querySelector(".display-box");
let currentVal = "0";
let decimalCounter = 0;
let stack1 = [];

function begin() {
  document.querySelector(".calculator-buttons");
  document.addEventListener("click", function (event) {
    buttonAction(event.target.innerText);
  });
}
function display() {
  displayArea.value = currentVal;
}

function buttonAction(value) {
  if (isNaN(parseInt(value))) {
    //if we aren't inputting a number in
    if (value === ".") {
      //either a decimal
      numbers(value);
    } else if (value === "Push") {
      //three equal signs vs two since we don't want to implicitly convert this type
      //either pushed
      stack1.push(currentVal);
      currentVal = "0";
      decimalCounter = 0;
    } else {
      operations(value); //either an operator
    }
  } else {
    numbers(value); //if it is a number we can
  }
  display();
}

//made the operation functions -> add subtract multiply divide
function add() {
  const num1 = parseFloat(stack1.pop());
  const num2 = parseFloat(stack1.pop());
  let sum1 = num1 + num2;
  currentVal = sum1.toString();
}
function subtract() {
  const num1 = parseFloat(stack1.pop());
  const num2 = parseFloat(stack1.pop());
  let difference = num2 - num1;
  currentVal = difference.toString();
}
function multiply() {
  const num1 = parseFloat(stack1.pop());
  const num2 = parseFloat(stack1.pop());
  let multiply = num1 * num2;
  currentVal = multiply.toString();
}
function divide() {
  const num1 = parseFloat(stack1.pop());
  const num2 = parseFloat(stack1.pop());
  let division = num2 / num1;
  currentVal = division.toString();
}

function operations(value) {
  if (value == "C") {
    //three equal signs vs two since we can implicitly convert this type
    //clear all details from the calculator
    currentVal = "0";
    decimalCounter = 0; //decimal point isn't needed anymore
  } else if (value == "+") {
    add();
  } else if (value == "-") {
    subtract();
  } else if (value == "*") {
    multiply();
  } else if (value == "/") {
    divide();
  } else if (value == "+-") {
    let x = -1 * parseInt(currentVal); //negate
    currentVal = x.toString();
  }
}

function numbers(value) {
  if (currentVal === "0") {
    currentVal = value; //we update it with what was clicked
  } else {
    if (value === ".") {
      if (decimalCounter === 0) {
        decimalCounter++;
      } else {
        return; //this is how we prevent double clicks on decimal
      }
    }
    currentVal += value; //after decimal point add the value
  }
}

begin(); //this is how program starts

/*keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // Do something
  }
})

*/
