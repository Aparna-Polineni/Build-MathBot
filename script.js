//Build a MathBot
// This bot will teach you about the Math object in JavaScript
// The Math object provides properties and methods for mathematical constants and functions.
// It is a built-in object in JavaScript and does not require any additional libraries or imports.

// so let's create a simple bot that introduces itself
const botName="MathBot";
const greeting="Hi there! My name is "+botName+" and I am here to teach you about the Math object!";
console.log(greeting);

// The Math.random() method returns a pseudo-random floating-point number in the range from 0-1 (inclusive of 0, but not 1)
console.log("The Math.random() method returns a pseudo random number between 0 and less than 1.");
// Let's generate a random number using Math.random()
// This will give us a random number between 0 (inclusive) and 1 (exclusive
const randomNum = Math.random();
console.log(randomNum);

// Now, let's generate a random number between two values
// To generate a random number between two values, we can use the following formula:
console.log("Now, generate a random number between two values, min =1 and max =100.");
const min=1;
const max=100;
// The formula is: Math.random() * (max - min) + min
// This will give us a random number between min (inclusive) and max (exclusive).
// Let's generate a random number between min and max
const randomNum2 = Math.random() *(max-min)+min;
console.log(randomNum2);

// The Math.floor() method rounds a number DOWN to the nearest integer
// It is often used to round down a floating-point number to the nearest whole number.
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
// Let's round down a number using Math.floor()
const numRoundedDown = Math.floor(6.7)
console.log(numRoundedDown);
// The Math.ceil() method rounds a number UP to the nearest integer
// It is often used to round up a floating-point number to the nearest whole number.
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
// Let's round up a number using Math.ceil()
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// The Math.round() method rounds a number to the nearest integer
// It is often used to round a floating-point number to the nearest whole number.
console.log("The Math.round() method rounds the value to the nearest whole integer.");
// Let's round a number using Math.round()
// If the decimal part is 0.5 or greater, it rounds up; otherwise,
const numRounded = Math.round(2.7);
console.log(numRounded);
// If the decimal part is less than 0.5, it rounds down.
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// The Math.max() and Math.min() methods return the largest and smallest number from a set of numbers, respectively.
// They can take any number of arguments and return the maximum or minimum value.
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
// Let's find the maximum number from a set of numbers
// We can pass multiple numbers as arguments to Math.max()
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
// Let's find the minimum number from a set of numbers
// We can pass multiple numbers as arguments to Math.min()
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);


console.log("It was fun learning about the different Math methods with you!");