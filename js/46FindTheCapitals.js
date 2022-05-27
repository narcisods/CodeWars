console.log('codewars')
//05/27/22  
// 7 Kyu
// Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.



//PREP
//PARAMETER: What can you take in?
    // A string
//RETURNS: How? print to console? Return?
    // Return an array of numbers
//EXAMPLES: Examples of how the code should work?
    test1 = 'CodEWaRs' //[0,3,4,6]
//PSEDUO CODE: Write pseduo code for everything
    // Loop through array, identify each element, return the index of that element into a new array


// My Solution
const capitals = word => {
    let result = []
    word.split('').map((ele,i)=> ele == ele.toUpperCase() ? result.push(i) : false )
    return result
}


console.log(capitals(test1))
// Codewars Solution 

// var capitals = function (word) {
//     var caps = [];
//     for(var i = 0; i < word.length; i++) {
//       if(word[i].toUpperCase() == word[i]) caps.push(i);
//     }
//     return caps;
//   };