//Question no:1

// Write a program that checks whether a given number is prime or not 
// using a loop. 
// Store the number to be checked
let num = 7;

// Variable to count how many times the number is divisible
let count = 0;

// Loop from 1 to the given number
for (let i = 1; i <= num; i++) {

    // Check if num is divisible by i
    if (num % i === 0) {
        // If divisible, increase count by 1
        count++;
    }
}

// Prime number has exactly 2 factors (1 and itself)
if (count === 2) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}

//Question no:2

// Write a program to print the first N Fibonacci numbers using a loop. 
// Program to print the first N Fibonacci numbers using a loop

// Step 1: Input N
let number = 10; // You can change this to any number of Fibonacci numbers you want

// Step 2: Initialize first two Fibonacci numbers
let a = 0;
let b = 1;

console.log("First " + N + " Fibonacci numbers:");

// Step 3: Loop to print Fibonacci numbers
for (let i = 1; i <= N; i++) {
    console.log(a);       // Step 3a: Print current number
    let next = a + b;     // Step 3b: Calculate next Fibonacci number
    a = b;                // Step 3c: Move b to a
    b = next;             // Step 3d: Move next to b
}

//Questions no. 3//

// Write a program to print the first N Fibonacci numbers using a loop. 
// Program to print the first N Fibonacci numbers using a function

// Step 1: Create a function that prints Fibonacci numbers
function printFibonacci(N) {
    let a = 0;  // First Fibonacci number
    let b = 1;  // Second Fibonacci number

    console.log("First " + N + " Fibonacci numbers:");

    for (let i = 1; i <= N; i++) {
        console.log(a);       // Step 2a: Print current Fibonacci number
        let next = a + b;     // Step 2b: Calculate next number
        a = b;                // Step 2c: Shift b to a
        b = next;             // Step 2d: Shift next to b
    }
}

// Step 3: Call the function with desired N
let N = 10;  // You can change this number
printFibonacci(N);

//question no 5.

// Write a program to count how many digits are in a number using a 
// loop. 
// Program to count the number of digits in a number using a function

// Step 1: Create a function that takes a number as input
function countDigits(number) {
    let count = 0;         // Step 2: Variable to store the count
    let temp = number;     // Step 3: Temporary variable to keep the original number

    // Step 4: Loop until temp becomes 0
    while (temp != 0) {
        temp = Math.floor(temp / 10); // Remove the last digit
        count++;                       // Increase count by 1
    }

    return count; // Step 5: Return the total count of digits
}

// Step 6: Call the function with any number
let n = 123456;
let totalDigits = countDigits(num);

// Step 7: Print the result
console.log("Number: " + num);
console.log("Number of digits: " + totalDigits);

//question no.6
// Function to print a star pattern
function printStarPattern(rows, columns) {
    for (let i = 1; i <= rows; i++) {    // Outer loop for rows
        let line = "";                    // Line to store stars
        for (let j = 1; j <= columns; j++) { // Inner loop for columns
            line += "*";                  // Add a star
        }
        console.log(line);                // Print the line
    }
}

// Call the function
printStarPattern(5, 5); // 5 rows and 5 columns

//Question no .7
// Use nested loops to print the following pattern. 
// Program to print a 5x5 star pattern using nested loops

// Step 1: Number of rows and columns
let rows = 5;  // Number of rows
let columns = 5;  // Number of stars in each row

// Step 2: Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let line = "";  // Step 2a: Variable to store one line of stars

    // Step 3: Inner loop for columns
    for (let j = 1; j <= columns; j++) {
        line += "*";  // Step 3a: Add a star to the line
    }

    // Step 4: Print the line
    console.log(line);
}

//Questions no .8
// Use nested loops to print the following pattern. 
// Program to print a 5x5 star pattern using nested loops

// Step 1: Number of rows and columns
let row = 5;  // Number of rows
let column = 5;  // Number of stars in each row

// Step 2: Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let line = "";  // Step 2a: Variable to store one line of stars

    // Step 3: Inner loop for columns
    for (let j = 1; j <= columns; j++) {
        line += "*";  // Step 3a: Add a star to the line
    }

    // Step 4: Print the line
    console.log(line);
}

//Questions no 9.

//  Write a program that takes a number and reverses it using a loop.
// Program to reverse a number

// Step 1: Input number
let numbers = 12345; // You can change this number
let reversed = 0;   // Step 2: Variable to store reversed number

let temp = number;  // Step 3: Use a temporary variable so the original number is not changed

// Step 4: Loop until temp becomes 0
while (temp != 0) {
    let lastDigit = temp % 10;          // Step 4a: Get the last digit of temp
    reversed = reversed * 10 + lastDigit; // Step 4b: Append the last digit to reversed
    temp = Math.floor(temp / 10);       // Step 4c: Remove the last digit from temp
}

// Step 5: Print the results
console.log("Original number: " + number);
console.log("Reversed number: " + reversed);

//Questions no. 10

// Program to print a right-angled triangle star pattern using nested loops

// Step 1: Number of rows
let R = 5; // You can change this number for bigger triangles

// Step 2: Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let line = "";  // Step 2a: Variable to store one line of stars

    // Step 3: Inner loop for columns
    // In each row, number of stars equals the row number
    for (let j = 1; j <= i; j++) {
        line += "*"; // Step 3a: Add a star to the line
    }

    // Step 4: Print the line
    console.log(line);
}
