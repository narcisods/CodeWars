console.log('codewars test')
// 8/11

// 8 Kyu
// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

//Details
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4




//PREP
//PARAMETER: What can you take in?
    // An array
//RETURNS: How? print to console? Return?
    // A number
//EXAMPLES: Examples of how the code should work?
    //['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'] //30
//PSEDUO CODE: Write pseduo code for everything
    //For each element in array, split using :, then compare the two numbers


// My Solution
const points = games => {
    let points = 0
    games.forEach(game =>{
        let score = game.split(':')
        if (Number(score[0]) > Number(score[1])) {
            points += 3 
        } else if ((Number(score[0]) === Number(score[1]))) {
            points += 1
        }
    })
    return points
}


console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))
// Codewars Solution 

// function points(games) {
//     let total = 0;
//     games.map(game => {
//       if (game[0] === game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }

