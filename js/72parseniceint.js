console.log('codewars test')
// Date 6.22.22

// Kyu 8
// Parse nice int from char problem
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript

//Details
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.



//PREP
//PARAMETER: What can you take in?
    // I always take in a string where it starts with a number(at random) and continues on with years old
//RETURNS: How? print to console? Return?
    // Return an integer 
//EXAMPLES: Examples of how the code should work?
    // "4 years old" => 4
//PSEDUO CODE: Write pseduo code for everything
    // Whatever the parameter is, I would return that parameters index[0]


// My Solution
const getAge = str => Number(str[0])

// Codewars Solution 

// function getAge(inputString){
//     return parseInt(inputString);
//   }