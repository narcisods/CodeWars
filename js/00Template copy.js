console.log('codewars')
// 5/31/22

// Kyu 8
// Lario and Muigi Pipe Problem

// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

//Details
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8



//PREP
//PARAMETER: What can you take in?
    // an array of numbers
//RETURNS: How? print to console? Return?
    // return an array
//EXAMPLES: Examples of how the code should work?
    // Check above
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
function pipeFix(numbers){
    let result = []
    for (let i = numbers[0];i <= numbers[numbers.length-1];i++) {
      result.push(i)
    }
    return result
  }

// Codewars Solution 

// function pipeFix(numbers){
//     var first = numbers[0];
//     var last = numbers[numbers.length-1];
    
//     var arr = [];
//     for(var i = first; i <= last; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }

