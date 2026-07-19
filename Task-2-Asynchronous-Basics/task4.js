function sendMessage(message) {
    console.log("Sending...");

    setTimeout(() => {
        console.log("Message:", message);
    }, 2000);
}

sendMessage("Hello Sara!");