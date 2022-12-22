console.log("Working");
// Core Types
// number =>       1, 2, 3, 4.6, 5, 6, ....  All Numbers, no differentation between integers or floats
// string  =>     "Hi" , "Hello",....  All text values
// boolean =>     true, false   Just these two, no 'truthy' or 'falsy' values
// TS vs JS
function add(num1, num2) {
  return +num1 + +num2;
}
function addJs(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return +num1 + +num2;
}
// const number1: number = "5";
var number1 = 5;
var number2 = 7.3;
var result = add(number1, number2);
console.log(result);
