console.log('codewars')
// 6/4/22

// Kyu 8
// Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

//Details

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]



//PREP
//PARAMETER: What can you take in?
    // a number
//RETURNS: How? print to console? Return?
    // return an array of numbers
//EXAMPLES: Examples of how the code should work?
    // See above
//PSEDUO CODE: Write pseduo code for everything
    // iterate through each number starting from 0 and ending in n


// My Solution
const powersOfTwo = n => {
    let result = []
    for (let i = 0; i <= n; i++) {
      i === 0 ? result.push(1) : result.push(Math.pow(2,i))
    }
  return result
}

console.log(powersOfTwo(2))
// Codewars Solution 

// function powersOfTwo(n){
//     var result = [];
//     for (var i = 0; i <= n; i++) {
//       result.push(Math.pow(2, i));
//     }
//     return result;
//   }