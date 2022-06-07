console.log('codewars')
// Date 6/7/2022

// Kyu 8
// Convert boolean values to strings 'Yes' or 'No'.

// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

//Details
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.





//PREP
//PARAMETER: What can you take in?
    // Take in a boolean. 
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
    // True = yes, false = no
//PSEDUO CODE: Write pseduo code for everything
    // Create a conditional that will return string 'yes' if argument is true and no if it is false


// My Solution
const boolToWord = bool => bool == true ? "Yes" : "No"

// Codewars Solution 

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }