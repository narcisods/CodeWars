console.log('Codewars test')
// 9/6/22

// 8 Kyu
// Count words
// https://www.codewars.com/kata/570cc83df616a85944001315

//Details
// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.




//PREP
//PARAMETER: What can you take in?
    // A string

//RETURNS: How? print to console? Return?
    // Print a number

//EXAMPLES: Examples of how the code should work?
    //countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1

//PSEDUO CODE: Write pseduo code for everything
    // Split return length of the array


// My Solution
function countWords(str) {
    let arr 
    str = str.trim().replace('\ufeff', ' ')
    arr = str.split(' ')
    arr = arr.filter(el => el !== '')
    return arr.length
  }

// Codewars Solution 

function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
  }