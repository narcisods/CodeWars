console.log('codewars')
// 6/14/22  

// Kyu 6
// Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

//Details

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.




//PREP
//PARAMETER: What can you take in?
    // An array of numbers
//RETURNS: How? print to console? Return?
    // return an array of numbers
//EXAMPLES: Examples of how the code should work?
    // [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//PSEDUO CODE: Write pseduo code for everything
    // Remove every odd integer and replace it with a place holder 
    //Place all odd numbers into a new array, sort that array
    // Replace all place holders by shifting the first number of sorted array


// My Solution
const sortArray = array => {
    let oddArr = []
    //loop, push odds to oodArr
    array.forEach((num) => (
        num % 2 != 0 ? oddArr.push(num) : false
    ))

    //sort oodArr
    oddArr.sort((a,b)=>a-b,0)
        console.log(oddArr)
    // shift elements from odd arr to results array
    let result = array.map((num)=> (
        num % 2 != 0 ? num = oddArr.shift() : num
    ))

    //return results array
    return result
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }
// Codewars Solution 

