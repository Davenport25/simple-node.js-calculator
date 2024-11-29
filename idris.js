// Simple Calculator

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input
function getNumber(promptText, callback) {
    rl.question(promptText, (input) => {
        const number = parseFloat(input);
        if (isNaN(number)) {
            console.log("Invalid input. Please enter a number.");
            getNumber(promptText, callback); // Ask again
        } else {
            callback(number);
        }
    });
}

// Get two numbers and perform operations
getNumber("Enter the first number: ", (x) => {
    getNumber("Enter the second number: ", (y) => {
        let sum = x + y;
        let difference = x - y;
        let product = x * y;
        let division;
        if (y !== 0) {
            division = x / y;
        } else {
            division = "Error: Division by zero is not allowed.";
        }

        console.log(`Results:
        The Sum is: ${sum}
        The Difference is: ${difference}
        The Product is: ${product}
        The Division is: ${division}`);
        rl.close();
    });
});





