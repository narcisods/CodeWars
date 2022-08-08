console.log('codewars test')
// 8/8/22

// 7 Kyu
// Factorial
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

//Details
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial





//PREP
//PARAMETER: What can you take in?
    //a number/integer
//RETURNS: How? print to console? Return?
    //return a facotrial
//EXAMPLES: Examples of how the code should work?
    // 0,1 1,1 4,24
//PSEDUO CODE: Write pseduo code for everything
    // Create an array pushing a number up to n. Mutiply each number by itself


// My Solution
const factorial = n => {
    let count = []
    if (n === 0){
        return 1
    } else {
    for (let i = 1; i <= n;i++) {
        count.push(i)
        }
    }
    console.log(count)
    return count.reduce((a,b)=> a*b,1)
}

console.log(factorial(4))
// Codewars Solution 

