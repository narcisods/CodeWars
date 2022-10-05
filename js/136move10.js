console.log('Codewars test')
// 10/04

// 7 Kyu
// Move 10
// https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

//Details

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


//PREP
//PARAMETER: What can you take in?
    // String

//RETURNS: How? print to console? Return?
    // Return a string

//EXAMPLES: Examples of how the code should work?
    // assert.strictEqual(moveTen("testcase"), "docdmkco");
    // assert.strictEqual(moveTen("codewars"), "mynogkbc");
    // assert.strictEqual(moveTen("exampletesthere"), "ohkwzvodocdrobo");
 

//PSEDUO CODE: Write pseduo code for everything
    // split into an array first
    // map through array
    // add 10 to code 
    // if above 10, go back to a


// My Solution
const moveTen = str => {
    return str.split('')
              .map(char => {
                 if (char.charCodeAt(0) >= 113) {
                    return String.fromCharCode(char.charCodeAt(0)-16)
                }else{ 
                    return String.fromCharCode(char.charCodeAt(0)+10)
                }
              })
              .join('')
}

// Codewars Solution 

// function moveTen(s){
//     return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
//                                   ? String.fromCharCode(e.charCodeAt(0) - 16) 
//                                   : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
//   }