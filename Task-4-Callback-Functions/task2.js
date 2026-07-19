function calculate(a, b, operation) {
    console.log(operation(a, b));
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, multiply);