console.log('codewars test')
// 8/12

// 8 Kyu
// A wolf in sheep's clothing

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

//Details
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.





//PREP
//PARAMETER: What can you take in?
    // An array of strings. Any other random elements I can expect? upper/lowercase?
//RETURNS: How? print to console? Return?
    // return a string
//EXAMPLES: Examples of how the code should work?
    //Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


//PSEDUO CODE: Write pseduo code for everything
    // Find the index number of the wolf
    // Return a template literal for each situation
    // If wolf is in the last index, return special string


// My Solution
const warnTheSheep = queue => {
    let wolfPosition = queue.indexOf('wolf')
    if (wolfPosition===queue.length-1) {
        return `Pls go away and stop eating my sheep`
    } else {
        return `Oi! Sheep number ${(queue.length-1) - wolfPosition}! You are about to be eaten by a wolf!`
    }
}

// Codewars Solution 

// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
//   }