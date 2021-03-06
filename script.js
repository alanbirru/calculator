// selectors
let display = document.querySelector(".display");
let displayTotal = document.querySelector(".displayTotal");
let addBtn = document.querySelector(".add");
let subtractBtn = document.querySelector(".subtract");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let clearBtn = document.querySelector(".clear");
let equalBtn = document.querySelector(".equal");
let num = "";
let nums = [];
let operator;
let operatorDisplay;

// operating functions
add = (a, b) => {
  return a + b;
};

subtract = (a, b) => {
  return a - b;
};

multiply = (a, b) => {
  return a * b;
};

divide = (a, b) => {
  return a / b;
};

// operate function
function operate(number1, number2, operator) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
  }
}
function clear() {
  display.textContent = "";
  nums = [];
  num = "";
  displayTotal.textContent = "0";
}
// function for event listeners operators
function operatorFunction(op) {
  nums.push(Number(num));
  if (num == "0") {
    // pop num 0 when an operator is pushed
    nums.pop();
  }
  if (nums.length > 1) {
    // if (operator === "+") {
    //   displayTotal.textContent = nums.reduce((a, b) => a + b);
    // }
    // if (operator === "-") {
    //   displayTotal.textContent = nums.reduce((a, b) => a - b);
    // }
    nums = [operate(nums[0], nums[1], operator)];
    displayTotal.textContent = nums[0];
    display.textContent = `${operatorDisplay} `;
  }
  num = "";
  operator = op;
  // nums.push("+");
  if (nums[0] === Infinity) {
    clear();
  }
  console.log(nums);
}

let btns = document.querySelectorAll(".numbers");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    display.textContent += btns[i].textContent;
    console.log(display.textContent);

    // on click put number on num
    if (btns[i].textContent === "0") {
      num += "0";
    } else if (btns[i].textContent === "1") {
      num += "1";
    } else if (btns[i].textContent === "2") {
      num += "2";
    } else if (btns[i].textContent === "3") {
      num += "3";
    } else if (btns[i].textContent === "4") {
      num += "4";
    } else if (btns[i].textContent === "5") {
      num += "5";
    } else if (btns[i].textContent === "6") {
      num += "6";
    } else if (btns[i].textContent === "7") {
      num += "7";
    } else if (btns[i].textContent === "8") {
      num += "8";
    } else if (btns[i].textContent === "9") {
      num += "9";
    } else if (btns[i].textContent === ".") {
      num += ".";
    }

    console.log(num);
  });
}

// clear event
clearBtn.addEventListener("click", function () {
  clear();
});

// add event
addBtn.addEventListener("click", function () {
  operatorDisplay = "+";
  operatorFunction("+");
});

subtractBtn.addEventListener("click", function () {
  operatorDisplay = "-";
  operatorFunction("-");
});

multiplyBtn.addEventListener("click", function () {
  operatorDisplay = "*";
  operatorFunction("*");
});

divideBtn.addEventListener("click", function () {
  operatorDisplay = "/";
  operatorFunction("/");
});

// equal btn
equalBtn.addEventListener("click", function () {
  nums.push(Number(num));
  nums = [operate(nums[0], nums[1], operator)];
  displayTotal.textContent = nums[0];

  console.log(nums);
  num = "0";
  // when divided by 0
  if (nums[0] == Infinity) {
    alert("you can not divide it by 0");
    clear();
  }
});
