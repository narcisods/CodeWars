console.log('codewars test')
// 8/3

// 7 Kyu
// Fix string case
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

//Details

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.



//PREP
//PARAMETER: What can you take in?
    // Take in a string of various cases
//RETURNS: How? print to console? Return?
    // Return a string with the same string but all the same casing
//EXAMPLES: Examples of how the code should work?
    //solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//PSEDUO CODE: Write pseduo code for everything
    // iternate through string and check which is upper case. If the count is higher than the length, change the wwhole string to uppercase, if equal or less, change the string to lower


// My Solution
const solve = string => {
    let upperCount = 0
    let arr = string.split('')
    arr.forEach(e => {
        if (e === e.toUpperCase()) {
        upperCount++
        }
    })
    return upperCount > (string.length/2) ? string.toUpperCase() : string.toLowerCase()
}

console.log(solve('CODe'))

// Codewars Solution 

// function solve(s){
//     let lowerC = 0;
//     let upperC = 0;
//     for( let i = 0;i<s.length;i++){
//       if( s[i] == s[i].toUpperCase()){
//         upperC++;
//       }
//       else{
//         lowerC++;
//       }
//     }
//     return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
// } 