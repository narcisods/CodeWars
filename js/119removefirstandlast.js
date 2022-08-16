console.log('codewars test')
// Date

// 8 Kyu
// Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

//Details

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


//PREP
//PARAMETER: What can you take in?
    // Take in a string of numbers
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
//     //"1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
//PSEDUO CODE: Write pseduo code for everything
    // Put string into an array, check if length is more than 2 elements, if not return null
    // Shift and pop, return new array


// My Solution
const array = arr => {
    let newArr = arr.split(',')
    if (newArr.length <= 2)  {
        return null
    } else {
        newArr.splice(0,1)
        newArr.splice(newArr.length-1)
        return newArr.join(' ')
    }
}
// Codewars Solution 
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }
