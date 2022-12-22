console.log("Working");
// Core Types

// number =>       1, 2, 3, 4.6, 5, 6, ....  All Numbers, no differentation between integers or floats
// string  =>     "Hi" , "Hello",....  All text values
// boolean =>     true, false   Just these two, no 'truthy' or 'falsy' values

// TS vs JS
function add(num1: number, num2: number, showResult: boolean) {
  if (showResult) {
    return +num1 + +num2;
  } else return;
}

function addJs(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return +num1 + +num2;
}

// const number1: number = "5";
const number1: number = 5;
const number2: number = 7.3;
const printResult = true;
const result = add(number1, number2, printResult);
console.log(result);
