
console.log('Codewars test')
// 10/10/22

// 7 Kyu
// Split In Parts
// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

//Details
// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)



//PREP
//PARAMETER: What can you take in?
    // String

//RETURNS: How? print to console? Return?
    // return a string

//EXAMPLES: Examples of how the code should work?
    // See above

//PSEDUO CODE: Write pseduo code for everything
    // 


// My Solution
const splitInParts = (str,lengthNumber) => {
    // Str -> Array
    return str.split('')
    // Iterate through an array, adding a space after each index that is divisible by lengthNumber
              .map((ele,index)=> {
                if (index % lengthNumber === 0 && index !== 0) {
                    return ` ${ele}`
                } else {
                    return ele
                }
            })
    //Join into string and return
               .join('')
}

// Codewars Solution 

// var splitInParts = function(s, partLength){
//     var parts = [];
//     var array = s.split('');
//     while(array.length) {
//       parts.push(array.splice(0,partLength).join(''));
//     }
//     return parts.join(' ');
//   }