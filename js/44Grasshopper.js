console.log('codewars')
// 5/26/22

// 8 Kyu
// GrassHopper - Terminal game combat function
// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript
//Details
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.





//PREP
//PARAMETER: What can you take in?
    // 2 integers
//RETURNS: How? print to console? Return?
    // return 1 number or a string
//EXAMPLES: Examples of how the code should work?
    // 100, 5, 95
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const combat = (health, damage) => health < damage ? 0 : health - damage

// Codewars Solution 

// function combat(health, damage) {
//     return health < damage ? 0 : health - damage
//   }