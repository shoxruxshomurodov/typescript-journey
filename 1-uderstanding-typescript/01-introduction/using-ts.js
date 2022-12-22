var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var button = document.querySelector("button");
var result = document.getElementById("result");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    result.textContent = String(add(Number(number1.value), Number(number2.value)));
});
// TypeScript Overview
//  TypeScript add...👇
// 1. TypeScript
// 2. Nexr generation JavaScript Features (compiled down for older Browsers)
// 3. Non-JavaScript Features like Interfaces or Generics
// 4. Meta-Programming Features like Decorators
// 5. Rich Configuration Options
// 6. Modern Tooling that helps even in non-TypeScript Projects
