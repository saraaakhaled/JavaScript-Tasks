function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

one();
two();

console.log("End");