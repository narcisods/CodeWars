console.log('codewars')
// 5.19.22

// Kyu7
// Make a function that does arithmetic!

// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/javascript

//Details
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)



//PREP
//PARAMETER: What can you take in?
    // 3 arguments - apply the string operation to the first 2 aruguments (intgers)
//RETURNS: How? print to console? Return?
    // return the result of the operation
//EXAMPLES: Examples of how the code should work?
    //5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
//PSEDUO CODE: Write pseduo code for everything
    // Assign each string to an actual operator
    // Execute operation
    // Return result


// My Solution
const arithmetic = (a, b, operator) => {
    operator == 'add' ? operator = '+' :
     operator == 'subtract' ? operator = '-' :
     operator == 'multiply' ? operator = '*' :
     operator == 'divide' ? operator = '/' :
     null
     
     return eval(`${a} ${operator} ${b}`)
}

console.log(arithmetic(5,2,'multiply'))
// Codewars Solution 

function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }
