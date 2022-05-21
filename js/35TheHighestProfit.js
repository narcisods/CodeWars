console.log('codewars')
// 5.21.22

// 7 Kyu
// The highest profit wins!
// https://www.codewars.com/kata/559590633066759614000063/javascript

//Details
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.






//PREP
//PARAMETER: What can you take in?
    //An array of numbers
//RETURNS: How? print to console? Return?
    // Return
//EXAMPLES: Examples of how the code should work?
    //minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
//PSEDUO CODE: Write pseduo code for everything
    // Sort array
    // Return first index and last index


// My Solution
    // const minMax = arr => {
    //     sorted = arr.sort((a,b)=> a - b, 0)
    //     return [sorted[0],sorted[sorted.length-1]]
    // } 

// Codewars Solution 

    const minMax = arr => [Math.min(...arr), Math.max(...arr)]

    console.log(minMax([1,2,3,4,5]))
