console.log('codewars')
// 11/16/22

// 8 Kyu
// Cat years, Dog years
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

//Details
// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



//PREP
//PARAMETER: What can you take in?
    // Takes in an integer 
//RETURNS: How? print to console? Return?
    // Return an array of 3 numbers
//EXAMPLES: Examples of how the code should work?
let test = 10 //[1,15,15]
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const humanYearsCatYearsDogYears = (humanYears) => {
    // First element in array will always equal argument humanYears will always be >= 1 and will only be whole numbers
    // Set variables for catyears and dogyears
    let catYears = calculateCat(humanYears)
    let dogYears = calculateDog(humanYears)
    // Return Array
    return [humanYears, catYears, dogYears]
}
    // Calculate catYears
const calculateCat = humanYears => {
    if (humanYears == 1) {
        return 15
    } else if (humanYears == 2) {
        return 15 + 9
    } else {
        return 15 + 9 + ((humanYears-2) * 4)
    }
}
    // Calculate dogYears
const calculateDog = humanYears => {
    if (humanYears == 1) {
        return 15
    } else if (humanYears == 2) {
        return 15 + 9
    } else {
        return 15 + 9 + ((humanYears-2) * 5)
    }
}



console.log(humanYearsCatYearsDogYears(test))
// Codewars Solution 

// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }