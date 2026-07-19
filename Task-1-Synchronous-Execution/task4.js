function calculateSalary(hours) {
    return hours * 100;
}
function printSalary(hours) {
    const salary = calculateSalary(hours);
    console.log("Salary:", salary);
}
printSalary(8);