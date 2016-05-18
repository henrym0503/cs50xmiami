/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var currYear = 2016,
    birth = 1914,// birth = console.log("What year were you born in?"),
    possibleAge1 = currYear - birth,
    possibleAge2 = possibleAge1 - 1
;

console.log("You are either " + possibleAge2 + " or " + possibleAge1 + " .");
