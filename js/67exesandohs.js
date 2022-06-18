console.log('codewars test')
// 6/18

// Kyu 7
// ExesandOhs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

//Details
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.



//PREP
//PARAMETER: What can you take in?
    // Take in a string
//RETURNS: How? print to console? Return?
    // Return a boolean
//EXAMPLES: Examples of how the code should work?
    //ooxx = true
    //xooxx = false
//PSEDUO CODE: Write pseduo code for everything
    // split string into an array
    // make all lowercase
    // check if all elements are either an X or an O using a conditional
    // reduce


// My Solution
//     const XO = str => {
//         let array = str.toLowerCase().split('').sort()
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] !== 'x' && array[i] !== 'o') {
//                 return false
//             }
//         }
//         if (array.length % 2 === 1) {
//             return false
//         }else if (arr[0] !== arr[1]) {
//             return true
//         } else if (array[array.length/2-1] !== array[(array.length/2)]) {
//             return true
//         } else {
//             return false
//         }
// }



// Codewars Solution 
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
