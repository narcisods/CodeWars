// 5/11
// Kyu 8
// Remove first and last character

//Details
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


// My Solution

const removeChar = str => str.slice(1,-1)



// Codewars Solution 

function removeChar(str) {
    return str.slice(1, -1);
  }

