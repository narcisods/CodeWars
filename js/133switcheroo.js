console.log('Codewars test')
// 10/3

// 7 Kyu
// Switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d

//Details
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



//PREP
//PARAMETER: What can you take in?
    // A string

//RETURNS: How? print to console? Return?
    // Return a string to the console

//EXAMPLES: Examples of how the code should work?
    // See above

//PSEDUO CODE: Write pseduo code for everything
    // Convert to array - use array.map with conditionals join


// My Solution
const switcheroo = x => {
    return x.split('')
            .map(x => {
                if (x === 'a') {
                    return 'b'
                }
                if (x === 'b') {
                    return 'a'
                } if (x ==='c') {
                  return x
                }
            })
            .join('')
}


// Codewars Solution 

// const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")