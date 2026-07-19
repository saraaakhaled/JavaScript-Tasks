function second() {
    console.log("Second function");
}

function first() {
    console.log("First function");
    second();
    console.log("Back to first function");
}

first();