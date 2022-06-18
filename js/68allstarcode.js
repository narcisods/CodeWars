console.log('codewars test')
// Date 5.18

// Kyu 8
// All star code challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.




//PREP
//PARAMETER: What can you take in?
    // two strings, first one can be empty
//RETURNS: How? print to console? Return?
    // return either 1, 2, 0
//EXAMPLES: Examples of how the code should work?
    //("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
//PSEDUO CODE: Write pseduo code for everything
    // Split first array, create a count. Count if string in 2nd argument is in the first and how many times



// My Solution
const strCount = (str,letter) => {
    let array = str.split('')
    return array.filter( x => x === letter).length
}

// Codewars Solution 

// function strCount(str, letter){  
//     return str.split(letter).length-1
//   }