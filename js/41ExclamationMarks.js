console.log('codewars')
// 5.25.22

// Kyu 8
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentenceitle
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

//Details
Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



//PREP
//PARAMETER: What can you take in?
    // Takes in a string    
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
    test = "Hi!" // return 'H!!'
//PSEDUO CODE: Write pseduo code for everything
    // use map to replace all vowels


// My Solution
const replace = s => s.replace((/[aeiou]/gi,"!"))
// Codewars Solution 

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }