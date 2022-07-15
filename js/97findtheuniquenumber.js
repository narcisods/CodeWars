console.log('codewars test')
// 7.15

// Kyu 6
// Find the unique number

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

//Details
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique



//PREP
//PARAMETER: What can you take in?
    //  An array of numbers. At least 3 numbers. Can take in very large arrays.
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    // Count each element by putting them into an object


// My Solution
function findUniq(arr) {
    const count = {}
    arr.forEach(element=>{
        count[element] = (count[element] || 0) +1
    })
    for (const property in count) {
        if (count[property] === 1) {
            return property
        }
    }
}


console.log(findUniq([1,1,1,2,1,1])) // 2
// Codewars Solution 

