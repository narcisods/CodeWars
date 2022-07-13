console.log('codewars test')
// 7/12

// Kyu 8
// Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript

// //Details

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'



//PREP
//PARAMETER: What can you take in?
    //
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
function greet (name, owner) {
    return name === owner ? 'Hello boss' :  'Hello guest'
  }

// Codewars Solution 

function greet (name, owner) {
    return name === owner ? 'Hello boss' :  'Hello guest';
  }