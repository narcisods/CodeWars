console.log('Codewars test')
// 8/25

// 5 Kyu
// Regex Password Validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

//Details

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric) 


//PREP
//PARAMETER: What can you take in?
    // A string that can contain anything

//RETURNS: How? print to console? Return?
    // Return a boolean

//EXAMPLES: Examples of how the code should work?
    //		doTest('fjd3IR9', true);
		// doTest('ghdfj32', false);
		// doTest('DSJKHD23', false);
		// doTest('dsF43', false);
		// doTest('4fdg5Fj3', true);
		// doTest('DHSJdhjsU', false);
		// doTest('fjd3IR9.;', false);
		// doTest('fjd3  IR9', false);
		// doTest('djI38D55', true);
		// doTest('djI3_8D55', false);
		// doTest('djI38D55@@', false);

//PSEDUO CODE: Write pseduo code for everything
    // Use .includes and create regex that fits all the criteria    


// My Solution
// const REGEXP = password => {
//     passwordCriteria = /[A-Za-z0-9]{1,6}+$/
//     return password.includes(passwordCriteria)
// }
const REGEXP = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])([a-zA-Z0-9]+){6,}$/

// Codewars Solution 

// const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;