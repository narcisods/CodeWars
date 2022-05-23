console.log('codewars')
// 5.21.22

// 7 Kyu
// Maximum Length Difference
// https://www.codewars.com/kata/5663f5305102699bad000056/javascript

//Details

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).




//PREP
//PARAMETER: What can you take in?
    // two arrays of strings
//RETURNS: How? print to console? Return?
    //  return a number
//EXAMPLES: Examples of how the code should work?
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
//PSEDUO CODE: Write pseduo code for everything
    // Count amount of elements there are?


// My Solution
    // const mxdiflg = (a1,a2) => {
    //     return Math.max(Math.abs((a1[a1.length]) - (a2[a2.length])))
    // }
    function mxdiflg(a1, a2) {
        if(a1.length==0||a2.length==0)return -1;
        return Math.max(Math.max(...a1.map(x=>x.length))-Math.min(...a2.map(x=>x.length)),Math.max(...a2.map(x=>x.length))-Math.min(...a1.map(x=>x.length)))
      }
console.log(mxdiflg(a1,a2))
// Codewars Solution 

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }