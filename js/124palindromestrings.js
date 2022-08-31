
console.log('Codewars test')
// 8/26

// 8 Kyu
// Palindrome Strings
// https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript

//Details
// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.



//PREP
//PARAMETER: What can you take in?
    //A string or a number

//RETURNS: How? print to console? Return?
    // return a string/number

//EXAMPLES: Examples of how the code should work?
    //"anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false


//PSEDUO CODE: Write pseduo code for everything
    // check if the string.reverse() = string, return boolean


// My Solution
const isPalindrome = line =>line.toString().split('').join('') === line.toString().split('').reverse().join('')


// Codewars Solution 
// function isPalindrome(line) {
//     return (String(line) == String(line).split('').reverse().join('') )
    
//   }
