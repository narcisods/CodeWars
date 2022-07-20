console.log('codewars test')
// 7/20


// Kyu 8
// The Wide-Mouthed frog!
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript

//Details
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.




//PREP
//PARAMETER: What can you take in?
    // String
//RETURNS: How? print to console? Return?
    // Return either wide or small
//EXAMPLES: Examples of how the code should work?
    //  assert.strictEqual(mouthSize("toucan"),"wide")
    // assert.strictEqual(mouthSize("ant bear"),"wide")
    // assert.strictEqual(mouthSize("alligator"),"small")
  
//PSEDUO CODE: Write pseduo code for everything
    // Use a ternary


// My Solution
const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
// Codewars Solution 

// function mouthSize(animal) {
//     return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
//   }
 
