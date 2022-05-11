console.log('codewars')

// 6kyu
// Replace With Alphabet Position


//Details
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )




// My Solution
let test = "uw#2:,t4"


function alphabetPosition(text) {
    let result = ''
    let newText = text.toLowerCase().replace(/[^a-z]/g, '')
    for (let i = 0; i < newText.length; i++) {
        result += (newText.charCodeAt(i) - 96) + ' '
    }
    return result.trim()
  }
console.log(alphabetPosition(test))

// Codewars Solution 

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }

