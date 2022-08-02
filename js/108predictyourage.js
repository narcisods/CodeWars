console.log('codewars test')
// 8/2

// 7 Kyu
// Predict your age!
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
//Details
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two



//PREP
//PARAMETER: What can you take in?
    // mutiple arguments that are all postive integers 
//RETURNS: How? print to console? Return?
    // return a whole integer
//EXAMPLES: Examples of how the code should work?
    //  (65,60,75,55,60,63,64,45), 86);
//PSEDUO CODE: Write pseduo code for everything
    // Sqaure each number, sum those numbers, square root that number, divide by two and round down


// My Solution
const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => {
    let arrayOfAges = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor((Math.sqrt(arrayOfAges.reduce((acc,current)=>acc +(current*current),0)))/2)
}

// Codewars Solution 

// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;