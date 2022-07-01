console.log('codewars test')
// Date

// Kyu 6
// Find the odd int
// codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//Details
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.





//PREP
//PARAMETER: What can you take in?
    // An array of numbers
//RETURNS: How? print to console? Return?
    //  Return number
//EXAMPLES: Examples of how the code should work?
//     //[7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


//PSEDUO CODE: Write pseduo code for everything
    // sort array, run a loop, if [0] = [1] ,delete 0. Return remaining number


// My Solution
function findOdd(arr) {
    let newArr = [...new Set(arr)]
    return newArr
}

console.log(findOdd([1,1,2,1,1,3,3,5,5,1,1]))

// Codewars Solution 

