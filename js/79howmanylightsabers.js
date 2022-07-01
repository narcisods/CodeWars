console.log('codewars test')
// Date 6/28

// Kyu 8
// How many lightsabers do you own?
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/javascript

//Details
// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):





//PREP
//PARAMETER: What can you take in?
    // I take in a name thats a string
//RETURNS: How? print to console? Return?
    // Return an integer. The integer will depend on the name. 
//EXAMPLES: Examples of how the code should work?
    // Zach --> 18
//PSEDUO CODE: Write pseduo code for everything
    // Check if name equal zack, return 18 if it does. Make default zero


// My Solution
let howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;


// Codewars Solution 

// function howManyLightsabersDoYouOwn(name) {
//     return name === 'Zach' ? 18 : 0;
//   }