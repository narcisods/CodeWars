console.log('Codewars test')
// 10/8

// 6 Kyu
// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

//Details
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/



//PREP
//PARAMETER: What can you take in?
    // An array

//RETURNS: How? print to console? Return?
    // Return an array

//EXAMPLES: Examples of how the code should work?
    // twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//PSEDUO CODE: Write pseduo code for everything
    // iternate through array, then create another loop that loops each added index. Return index


// My Solution
const twoSum = (nums,target) => {
    let result = []
    nums.forEach((number,index)=> {
        for(let i = 0;i<nums.length;i++) {
             if (number+nums[i]===target && index != i) {
                 result.push(index,i)
             }
        }
    })
    return [result[0],result[1]]
}
console.log(twoSum([1,2,3],4))


// Codewars Solution 

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}
