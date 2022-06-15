console.log('codewars')
// 6.15.22

// Kyu 6
// Take a Ten Minutes Walk

// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

//Details
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.



//PREP
//PARAMETER: What can you take in?
    // Take in an array of strings that each string is one of 4 letters, a b c d
//RETURNS: How? print to console? Return?
    // Return a boolean
//EXAMPLES: Examples of how the code should work?
    // w // false
//PSEDUO CODE: Write pseduo code for everything
    // Need to make a conditional to check for 2 of the following
    // 1. Is the array length 10?
    // 2. Is there an even amount of the same letter


// My Solution
function isValidWalk(walk) {
    //check if there are ten elements which would amount to a 10 min walk // return false otherwise
    if (walk.length !== 10) {
      return false
    } else {
    // count each N W E S string
      let numN = 0
      let numE = 0
      let numW = 0
      let numS = 0
      walk.forEach((x)=>{
        if (x == 'n') {
          numN += 1
        } else if (x == 'e') {
          numE += 1
        } else if (x == 'w') {
          numW += 1
        } else if (x == 's') {
          numS += 1
        }
      })
    // if N = S and E = W then it should return true
     if(numN == numS && numE == numW){
       return true
     } 
    }
  }

// Codewars Solution 
// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
  
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }


