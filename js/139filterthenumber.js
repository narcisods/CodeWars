console.log('Codewars test')
// 10/7 


// 7 Kyu
// Filter the number
// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

//Details
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.





//PREP
//PARAMETER: What can you take in?
    // string

//RETURNS: How? print to console? Return?
    // number return

//EXAMPLES: Examples of how the code should work?
    // "123" = 123

//PSEDUO CODE: Write pseduo code for everything
    // Filter using regex return Number()


// My Solution
const filterString = str => {
    return Number(str.replace(/[a-zA-Z]+/gi,''))
}

// var FilterString = function(value) {
//     return parseInt(value.replace(/[^\d]/g, ""))
//   }

// const FilterString = value => +value.replace(/\D/g, '');