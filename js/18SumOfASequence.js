console.log('codewars')
// 5/12/22

// 7 Kyu
// Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a/javascript

//Details
// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]



//PREP
//PARAMETER: What can you take in?
    // 3 numbers, all non-negetaive integers, nothing exterme
//RETURNS: How? print to console? Return?
    // return 
//EXAMPLES: Examples of how the code should work?
// 2,2,2 --> 2
//2,6,2 //--> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const sequenceSum = (begin, end, step) => {
   // use a for loop to tackle this problem 
   let result = 0
   // let i = begin, let end be the stopping point, increaes by step
    for (let i = begin; i <= end; i += step)  {
    //+= i to find the sum of the sequence //return
        result = result += i
    }
    return result
  };
console.log(sequenceSum(2,6,2))
// Codewars Solution 
const sequenceSumCodewars = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  };
