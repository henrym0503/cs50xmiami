/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var cTemp1 = 19;
var fTemp1 = ((cTemp1 * 9) / 5) + 32;
console.log("" + cTemp1 + "°C is " + fTemp1 + "°F.");

var fTemp2 = 72;
var cTemp2 = ((fTemp2 - 32) * 5) / 9;
console.log("" + fTemp2 + "°F is " + cTemp2 + "°C.");
