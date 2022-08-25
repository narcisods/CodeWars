console.log('Codewars test')
// 8/24

// 8 Kyu
// Sort and star
// Link

//Details
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.



//PREP
//PARAMETER: What can you take in?
    // Take in an array of strings

//RETURNS: How? print to console? Return?
    //

//EXAMPLES: Examples of how the code should work?
    //twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' 

//PSEDUO CODE: Write pseduo code for everything
    //const twoSort = s => s.sort((a,b) => a-b,0)[0].split('').join("***")



// My Solution

const twoSort = s => s.sort()[0].split('').join("***")


console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))
// Codewars Solution 

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }