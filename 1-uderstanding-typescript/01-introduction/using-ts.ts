const number1 = document.getElementById("number1")! as HTMLInputElement;
const number2 = document.getElementById("number2")! as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function (): void {
  result.textContent = String(
    add(Number(number1.value), Number(number2.value))
  );
});

// TypeScript Overview
//  TypeScript add...👇

// 1. TypeScript
// 2. Nexr generation JavaScript Features (compiled down for older Browsers)
// 3. Non-JavaScript Features like Interfaces or Generics
// 4. Meta-Programming Features like Decorators
// 5. Rich Configuration Options
// 6. Modern Tooling that helps even in non-TypeScript Projects
