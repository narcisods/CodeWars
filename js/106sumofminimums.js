console.log('codewars test')
// Date

// 7 Kyu
// Sum of Minimums!
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

//Details
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.



//PREP
//PARAMETER: What can you take in?
    // Take in a nested array of arrays with have integers within them 
//RETURNS: How? print to console? Return?
    // Return a number. The sum of the lowest value of each array
//EXAMPLES: Examples of how the code should work?
    //[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
//PSEDUO CODE: Write pseduo code for everything
    // Iternate through the nested array finding lowest value to add to the result


// My Solution
const sumOfMinimums = arr => arr.reduce((acc,current)=> acc + Math.min(...current) ,0)



//test 
console.log(sumOfMinimums([ [ 1, 2, 3, 4, 5 ] , [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]))

// Codewars Solution 
// function sumOfMinimums(arr) {
//     let total = 0;
    
//     for (let i = 0; i < arr.length; i++){
//      total += Math.min(...arr[i])
//     }
    
//     return total;
//   } 