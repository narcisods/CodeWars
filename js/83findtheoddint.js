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
    //create an object that holds each item and the amount it is repeated
        const counts = {}
        arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
    //return the property that has an odd number as its property
        for (const property in counts) {
            if (counts[property]%2===1) {
                return Number(property)
            }
        }
    }
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

// Codewars Solution 

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);