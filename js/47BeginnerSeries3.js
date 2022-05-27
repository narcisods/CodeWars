console.log('codewars')
// 5/27/22  

// Kyu 7
// Beginner Series #3 Sum of Numbers

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

//Details

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


//PREP
//PARAMETER: What can you take in?
    // Take in 2 integers that can be negative
//RETURNS: How? print to console? Return?
    // return a number
//EXAMPLES: Examples of how the code should work?
test1 = (-1,2) // 2 (-1+0+1+2)
//PSEDUO CODE: Write pseduo code for everything
    //sort so that lowest number is in index 0


// My Solution
// const getSum = (a,b) => {
//     if (a > b) {
//         let temp = b
//         b = a
//         a = temp
//     }
//     arr = []
//     for (let i = a; i <= b; i++) {
//         arr.push(i)
//     }
//     return arr.reduce((acc,c)=>acc+c,0)
// }

// Codewars Solution 

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
        console.log(min)
        console.log(max)
    return (max - min + 1) * (min + max) / 2;
  }
  console.log(GetSum(2,-1))
