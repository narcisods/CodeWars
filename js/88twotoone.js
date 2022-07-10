console.log('codewars test')
// 7/9/22

// Kyu 7
// Two to one
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

//Details
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.



//PREP
//PARAMETER: What can you take in?
    //
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//PSEDUO CODE: Write pseduo code for everything
    // combine both strings
    // sort new string
    // remove duplicates
    // return new string


// My Solution
function longest(s1, s2) {
    return [...new Set((s1+s2).split('').sort())].join('')
  }


console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'))
// Codewars Solution 
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
