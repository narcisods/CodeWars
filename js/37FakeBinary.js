console.log('codewars')
// 5.21.22

// 8 Kyu
// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript

//Details
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string





//PREP
//PARAMETER: What can you take in?
    // a string of numbers
//RETURNS: How? print to console? Return?
    // return a string of numbers
//EXAMPLES: Examples of how the code should work?
test = '45385593107843568' // 01011110001100111
//PSEDUO CODE: Write pseduo code for everything
    // replace 5< with 0 and >=5 with 1


// My Solution
const fakeBin=(str) => str.split('').map(ele => ele < 5 ? 0 : 1).join('')

console.log(fakeBin(test))

// Codewars Solution 

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}