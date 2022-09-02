console.log('Codewars test')
// 3/11/22

// 8 Kyu
// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

//Details
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.



//PREP
//PARAMETER: What can you take in?
    // 3 params

//RETURNS: How? print to console? Return?
    // return a number

//EXAMPLES: Examples of how the code should work?
    //
    // h = 0
    // m = 1
    // s = 1
    
    // result = 61000
//PSEDUO CODE: Write pseduo code for everything
    // Create an equation to return milliseconds


// My Solution
const past = (h,m,s) => (h*60*60*1000)+(m*60*1000)+(s*1000)

// Codewars Solution 

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  } 