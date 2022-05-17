console.log('codewars')
// 5.17.22
// 7 Kyu
// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

//Details
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



//PREP
//PARAMETER: What can you take in?
    // String of numbers, can be negative. Always at least 1 number. 

//RETURNS: How? print to console? Return?
    // Return highest number first, always two numbers

//EXAMPLES: Examples of how the code should work
let test = "1 2 3 4 5"  // return "5 1"
let testTwo = "1 2 -3 4 5" // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//PSEDUO CODE: Write pseduo code for everything


// My Solution
const highAndLow = (str) => {
    //Split string into an array. 
    //Will sort array from largest number to smallest
    //Return first element and last element in array, with a space in a string
    let arr = str.split(' ').sort((a,b) => b - a, 0)
    return `${arr[0]} ${arr[arr.length -1]}`
}

console.log(highAndLow(test))
console.log(highAndLow(testTwo))

// Codewars Solution 

function CWhighAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

