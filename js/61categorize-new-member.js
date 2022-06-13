console.log('codewars')
// 6/12

// Kyu 7
// Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

//Details
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.



//PREP
//PARAMETER: What can you take in?
    // An array with a list of arrays of pairs
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
test1 = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// => ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//PSEDUO CODE: Write pseduo code for everything
    // Iterate through each pair and set a conditonal to determine if it is open or senior. Push that to a new array


// My Solution
const openOrSenior = data => data.map((ele)=> ele[0] >= 55 && ele[1] > 7 ? 'Senior' : 'Open')


console.log(openOrSenior(test1))

// Codewars Solution 

// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//   }