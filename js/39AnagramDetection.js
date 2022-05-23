console.log('codewars')
// 5.22.22

// 7 Kyu
// Anagram Detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

//Details
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.





//PREP
//PARAMETER: What can you take in?
    // Take in two strings
//RETURNS: How? print to console? Return?
    // Return a boolean
//EXAMPLES: Examples of how the code should work?
    //"foefet" is an anagram of "toffee"
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const isAnagram = (test, original) => (test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join(''))

   console.log(isAnagram('foefet','toffee'))
// Codewars Solution 

// write the function isAnagram
// var isAnagram = function(test, original) {
//     var t = test.toLowerCase().split('').sort().join('');
//     var o = original.toLowerCase().split('').sort().join('');
//     return (t==o)?true:false;
//   };