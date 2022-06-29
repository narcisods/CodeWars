console.log('codewars test')
// 6.29

// Kyu 8
// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

//Details
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.




//PREP
//PARAMETER: What can you take in?
    // Take in an array of birds 
//RETURNS: How? print to console? Return?
    // Return an array
//EXAMPLES: Examples of how the code should work?
    // ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//PSEDUO CODE: Write pseduo code for everything
    // Iterate through the list of geese, and filter out each geese in the given array.


// My Solution
function gooseFilter(arr) {
    result = []
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    result = arr.filter(bird => !geese.includes(bird))
    return result
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// Codewars Solution 

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };