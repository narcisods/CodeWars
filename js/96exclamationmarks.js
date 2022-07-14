console.log('codewars test')
// 07.14

// Kyu 8
// Exclamation marks series #1: Remove an exclamation mark from the end of string
// https://www.codewars.com/kata/57fae964d80daa229d000126/javascript

//Details

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.




//PREP
//PARAMETER: What can you take in?
    // 
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
function remove (string) {
    return string[string.length-1] === '!'? string.slice(0,-1) : string
  }

// Codewars Solution 
const remove = s => s.replace(/!$/, '');
