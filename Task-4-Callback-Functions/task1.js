function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function afterGreeting() {
    console.log("Welcome!");
}
greet("Sara", afterGreeting);