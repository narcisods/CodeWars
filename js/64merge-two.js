console.log('codewars')
// 6.15 

// Kyu 8
// Merge two sorted arrays into one
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

//Details
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.





//PREP
//PARAMETER: What can you take in?
    // two arrays
//RETURNS: How? print to console? Return?
    // return an array
//EXAMPLES: Examples of how the code should work?
    //* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const mergeArrays = (arr1, arr2) => [...new Set([...arr1,...arr2].sort((a,b)=>a-b,0))]



// Codewars Solution 
// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
//   }
