console.log('codewars test')
// 6.19

// Kyu 7
// Title
// Link

//Details

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


//PREP
//PARAMETER: What can you take in?
    // A string
//RETURNS: How? print to console? Return?
    // Return two strings in an array 
//EXAMPLES: Examples of how the code should work?
    // ("abcdef") = ['AbCdEf', 'aBcDeF'].
//PSEDUO CODE: Write pseduo code for everything
    //seperate string
    //map two seperate indecies


// My Solution
const capitalize = s => {
    let result = []
    let arr = s.split('')
    result.push(arr.map((e,i)=> i%2==0 ? e.toUpperCase() : e ).join(''))
    result.push(arr.map((e,i)=> i%2==1 ? e.toUpperCase() : e ).join(''))
    return result
}

console.log(capitalize('abcdef'))
// Codewars Solution 

// function capitalize(s){
//     const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//     const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//     return [even, odd];
//   };