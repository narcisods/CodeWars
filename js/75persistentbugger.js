console.log('codewars test')
// Date 6.24

// Kyu 6
// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

//Details
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.



//PREP
//PARAMETER: What can you take in?
    // I take in a positive integer, could be single digit
//RETURNS: How? print to console? Return?
    // Return a single digit 
//EXAMPLES: Examples of how the code should work?
    //39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    //999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
    // 4 --> 0 (because 4 is already a one-digit number)
//PSEDUO CODE: Write pseduo code for everything
    //Create a seperate function that turns a number into an array of individual digits


// My Solution

const numToArrayMutiply = num => num
    .toString()
    .split('')
    .map(x=>Number(x))
    .reduce((acc,c)=>acc*c)

// const mutiplyArray = arr => {
//     let product = 1
//         for (i = 0; i < arr.length; i++) {
//             product *= arr[i]
//         }
//     return product
// }

const persistence = num => {
    if (num < 10) {
        return 0
    } else {
    let current = num
    let count = 0
    do {
        current = numToArrayMutiply(current)
        count++
    } while (current > 9)
return count
    }
}

console.log(persistence(999))
// Codewars Solution 

// function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
//  }