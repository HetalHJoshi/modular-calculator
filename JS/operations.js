// js/operations.js

export class Operations {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }
  modulo(a, b) {
    return a % b;
  }
  power(a, b) {
    return Math.pow(a, b);
  }
}
