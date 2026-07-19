function login(username, password, callback) {
    console.log("Checking credentials...");

    setTimeout(() => {
        console.log("Login successful!");
        callback();
    }, 2000);

function showDashboard() {
    console.log("Welcome to your dashboard.");
}
login("Sara", "1234", showDashboard);}