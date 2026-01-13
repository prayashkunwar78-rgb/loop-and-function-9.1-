//Questions no.1
// Program to apply a callback operation on two numbers

// Step 1: Create a function that takes two numbers and a callback
function applyOperation(num1, num2, callback) {
    // Step 2: Call the callback function with the two numbers
    let result = callback(num1, num2);

    // Step 3: Return the result
    return result;
}

// Step 4: Define some callback functions for testing
function add(a, b) {
    return a + b; // Returns sum
}

function multiply(a, b) {
    return a * b; // Returns product
}

// Step 5: Test the applyOperation function
let sumResult = applyOperation(5, 3, add);        // 5 + 3
let multiplyResult = applyOperation(5, 3, multiply); // 5 * 3

// Step 6: Print the results
console.log("Sum: " + sumResult);
console.log("Product: " + multiplyResult);



//Question no.2
// Program to calculate the area of a rectangle using a function

// Step 1: Create a function that takes length and width as parameters
function calculateArea(length, width) {
    // Step 2: Calculate the area
    let area = length * width;

    // Step 3: Return the area
    return area;
}

// Step 4: Test the function with length = 5 and width = 8
let length = 5;
let width = 8;
let rectangleArea = calculateArea(length, width); // Call the function and store the result

// Step 5: Print the result
console.log("Length: " + length);
console.log("Width: " + width);
console.log("Area of the rectangle: " + rectangleArea);




//question no.3
// Program to calculate letter grade based on score using a function

// Step 1: Create a function that takes a score as input
function calculateGrade(score) {
    // Step 2: Check the score ranges and return corresponding letter grade
    if (score >= 90 && score <= 100) {
        return "A";  // Score 90-100
    } else if (score >= 80 && score < 90) {
        return "B";  // Score 80-89
    } else if (score >= 70 && score < 80) {
        return "C";  // Score 70-79
    } else if (score >= 60 && score < 70) {
        return "D";  // Score 60-69
    } else if (score >= 0 && score < 60) {
        return "F";  // Score below 60
    } else {
        return "Invalid score"; // If score is not between 0-100
    }
}

// Step 3: Test the function with different scores
let score1 = 95;
let score2 = 82;
let score3 = 76;
let score4 = 65;
let score5 = 50;

// Step 4: Call the function and store the results
console.log("Score: " + score1 + " => Grade: " + calculateGrade(score1));
console.log("Score: " + score2 + " => Grade: " + calculateGrade(score2));
console.log("Score: " + score3 + " => Grade: " + calculateGrade(score3));
console.log("Score: " + score4 + " => Grade: " + calculateGrade(score4));
console.log("Score: " + score5 + " => Grade: " + calculateGrade(score5));



//questions no.4
// Program to convert Celsius to Fahrenheit using a function

// Step 1: Create a function that takes Celsius as input
function celsiusToFahrenheit(celsius) {
    // Step 2: Apply the conversion formula
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Step 3: Return the Fahrenheit value
    return fahrenheit;
}

// Step 4: Test the function with a value
let tempCelsius = 25;  // You can change this value
let tempFahrenheit = celsiusToFahrenheit(tempCelsius); // Call the function

// Step 5: Print the result
console.log(tempCelsius + "°C is equal to " + tempFahrenheit + "°F");



//questions no. 5
// Program to create a username using a function

// Step 1: Create a function that takes firstName and lastName
function createUsername(firstName, lastName = "User") { // lastName defaults to "User" if not provided
    // Step 2: Combine firstName and lastName with underscore
    let username = firstName + "_" + lastName;

    // Step 3: Convert the username to lowercase
    username = username.toLowerCase();

    // Step 4: Return the username
    return username;
}

// Step 5: Test the function
let user1 = createUsername("Prayash", "Kunwar"); // Both names provided
let user2 = createUsername("Pragyan");             // Only first name provided

// Step 6: Print the results
console.log("Username 1: " + user1);
console.log("Username 2: " + user2);



//question no.6
// Program to filter adult ages using a function and filter() method

// Step 1: Create a function that takes an array of ages
function filterAdults(ages) {
    // Step 2: Use the filter() method to select ages >= 18
    let adults = ages.filter(function(age) {
        return age >= 18; // Keep age if it's 18 or above
    });

    // Step 3: Return the new array
    return adults;
}

// Step 4: Test the function with an array of ages
let ageArray = [12, 17, 18, 20, 15, 25];
let adultArray = filterAdults(ageArray);

// Step 5: Print the results
console.log("Original ages: " + ageArray);
console.log("Adults (18 or older): " + adultArray);


//questions no. 7
// Program to greet a user using a function

// Step 1: Create a function that takes a name as parameter
function greetUser(name) {
    // Step 2: Create a greeting message
    let message = "Hello, " + name + "! Welcome to JavaScript.";
    
    // Step 3: Return the message
    return message;
}

// Step 4: Call the function with a name
let userName = "Prayash"; // You can change this name
let greeting = greetUser(userName); // Call the function and store the result

// Step 5: Print the greeting message
console.log(greeting);



//question no. 8
// Program to check if a number is even using a function

// Step 1: Create a function that takes a number as parameter
function isEven(number) {
    // Step 2: Check if the number is divisible by 2
    if (number % 2 === 0) {
        return true;  // Step 2a: If divisible by 2, it's even
    } else {
        return false; // Step 2b: Otherwise, it's odd
    }
}

// Step 3: Test the function with some numbers
let num1 = 10;
let num2 = 7;

console.log(num1 + " is even? " + isEven(num1)); // true
console.log(num2 + " is even? " + isEven(num2)); // false


//question no.9
// Program to check if a string is a palindrome using a function

// Step 1: Create a function that takes a string as input
function isPalindrome(str) {
    // Step 2: Convert string to lowercase and remove spaces
    let cleanedStr = str.toLowerCase().replace(/\s+/g, '');

    // Step 3: Reverse the cleaned string
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    // Step 4: Compare cleaned string with reversed string
    if (cleanedStr === reversedStr) {
        return true;  // It's a palindrome
    } else {
        return false; // Not a palindrome
    }
}

// Step 5: Test the function
let test1 = "Racecar";
let test2 = "Hello World";
let test3 = "A man a plan a canal Panama";

// Step 6: Print the results
console.log("\"" + test1 + "\" is palindrome? " + isPalindrome(test1));
console.log("\"" + test2 + "\" is palindrome? " + isPalindrome(test2));
console.log("\"" + test3 + "\" is palindrome? " + isPalindrome(test3));


//question no. 10
// Program to find the largest number in an array using a function

// Step 1: Create a function that takes an array as parameter
function findMax(numbers) {
    // Step 2: Assume the first number is the largest initially
    let max = numbers[0];

    // Step 3: Loop through the array to find the largest number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {   // Step 3a: Compare current number with max
            max = numbers[i];      // Step 3b: Update max if current number is larger
        }
    }

    // Step 4: Return the largest number
    return max;
}

// Step 5: Test the function
let myArray = [3, 7, 2, 9, 1];
let largestNumber = findMax(myArray);

// Step 6: Print the result
console.log("Array: " + myArray);
console.log("Largest number: " + largestNumber);



//question no. 11
// Program to reverse a string using a function

// Step 1: Create a function that takes a string as input
function reverseString(str) {
    let reversed = "";           // Step 2: Variable to store the reversed string

    // Step 3: Loop through the string from end to start
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];      // Step 3a: Add each character to the reversed string
    }

    // Step 4: Return the reversed string
    return reversed;
}

// Step 5: Test the function
let originalString = "hello";
let reversedString = reverseString(originalString);

// Step 6: Print the result
console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);
