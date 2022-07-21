console.log('codewars test')
// 7/21 

// Kyu 7
// Count the divisors of a number
// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

//Details
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)



//PREP
//PARAMETER: What can you take in?
    // Take in a positive integer up to 500000
//RETURNS: How? print to console? Return?
    // Return a single integer
//EXAMPLES: Examples of how the code should work?
    // 4 --> 3 (1, 2, 4)
    // 5 --> 2 (1, 5)
    // 12 --> 6 (1, 2, 3, 4, 6, 12)
    // 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
//PSEDUO CODE: Write pseduo code for everything
    //for loop iterate through each number and check if the modulus is equal to zero, if it is add count++


// My Solution
function getDivisorsCnt(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (n%i===0) 
            count++
    }
    return count
}
function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
  }

// Codewars Solution 

