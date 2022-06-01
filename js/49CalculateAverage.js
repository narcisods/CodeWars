console.log('codewars')
// // 6/1/22

// // Kyu 8
// // Calculate average
// // https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// //Details
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



//PREP
//PARAMETER: What can you take in?
    // An array of numbers
//RETURNS: How? print to console? Return?
    // Return a number
//EXAMPLES: Examples of how the code should work?
    // 1,1,1 //1
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const find_average = array => array == 0 ? 0 : array.reduce((acc,c)=> acc + c, 0 )/array.length


console.log(find_average([1,1,1]))
// Codewars Solution 

// var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }

