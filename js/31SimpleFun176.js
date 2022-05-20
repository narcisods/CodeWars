console.log('codewars')
// 5.20

// 7 Kyu
// Simple Fun #176: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

//Details
// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string



//PREP
//PARAMETER: What can you take in?
    // A string that may contain any character
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
    // "ultr53o?n", the output should be "nortlu".
    test = 'ultr53o?n'
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
    //Turn to array, split, replace non letter characters, join
    const reverseLetter = str => str.replace(/[^a-z]/gi,'').split('').reverse().join('')


    console.log(reverseLetter(test))
// Codewars Solution 

//reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');
