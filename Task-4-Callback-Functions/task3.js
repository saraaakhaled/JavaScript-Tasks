function loadData(callback) {
    console.log("Loading data...");

    setTimeout(() => {
        console.log("Data loaded.");
        callback();
    }, 2000);
}
loadData(() => {
    console.log("Displaying data.");
});