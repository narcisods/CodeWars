console.log('codewars')
// 5.19.22

// 7 Kyu
// Sort Numbers
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

//Details
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []



//PREP
//PARAMETER: What can you take in?
    // Taking in an array of numbers. Also can be null or nil
//RETURNS: How? print to console? Return?
    // Return
//EXAMPLES: Examples of how the code should work?
test = [1, 2, 10, 50, 5]; // should return [1,2,5,10,50]

//PSEDUO CODE: Write pseduo code for everything
    // 


// My Solution
    const solution = arr => arr == null ? [] : arr.sort((a,b)=> a - b, 0 )

    console.log(solution([]))
// Codewars Solution 

function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }

  function solution(nums){
    return nums ? nums.sort(function(a, b) { return a - b;}) : [];
  }