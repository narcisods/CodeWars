console.log('codewars')
// 6/5/22

// Kyu 8
// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
//Details
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.



//PREP
//PARAMETER: What can you take in?
    // an array
//RETURNS: How? print to console? Return?
    //return an integer
//EXAMPLES: Examples of how the code should work?
    // above
//PSEDUO CODE: Write pseduo code for everything
    // sort/ return zero index


// My Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let arr = args.sort((a,b)=>a-b,0)
      return arr[0]
    }
  }


// Codewars Solution 
// //class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//       }
//     }

