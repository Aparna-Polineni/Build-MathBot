Build a MathBot - workshop by freeCodeCamp
This bot will teach you about the Math object in JavaScript
The Math object provides properties and methods for mathematical constants and functions.
It is a built-in object in JavaScript and does not require any additional libraries or imports.

so let's create a simple bot that introduces itself

1.  The Math.random() method returns a pseudo-random floating-point
    number in the range from 0 -1 (inclusive of 0, but not 1).

    Let's generate a random number using Math.random()
    This will give us a random number between 0 (inclusive) and 1 (exclusive)

    Now, let's generate a random number between two values
    To generate a random number between two values, we can use the following formula:

    The formula is: Math.random() * (max - min) + min
    This will give us a random number between min (inclusive) and max (exclusive).
    Let's generate a random number between min and max

2.  The Math.floor() method rounds a number DOWN to the nearest integer
    It is often used to round down a floating-point number to the nearest whole number.
    Let's round down a number using Math.floor()

3.  The Math.ceil() method rounds a number DOWN to the nearest integer
    It is often used to round up a floating-point number to the nearest whole number.
    Let's round up a number using Math.ceil()

4.  The Math.round() method rounds a number to the nearest integer
    It is often used to round a floating-point number to the nearest whole number.
    Let's round a number using Math.round()
    If the decimal part is 0.5 or greater, it rounds up; otherwise,
    If the decimal part is less than 0.5, it rounds down.

5.   The Math.max() and Math.min() methods return the largest and smallest number from a set of numbers respectively.
    They can take any number of arguments and return the maximum or minimum value.

6.  Let's find the maximum number from a set of numbers
    We can pass multiple numbers as arguments to Math.max()
    Let's find the minimum number from a set of numbers
    We can pass multiple numbers as arguments to Math.min()