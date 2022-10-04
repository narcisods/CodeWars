console.log('Codewars test')
// 10/3/22

// 7 Kyu
// All unique
// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

//Details
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.





//PREP
//PARAMETER: What can you take in?
    // A string

//RETURNS: How? print to console? Return?
    // A boolean return

//EXAMPLES: Examples of how the code should work?
//     // Test.assertEquals(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
// Test.assertEquals(hasUniqueChars("abcdef"),true)
// Test.assertEquals(hasUniqueChars("aA"),true) // case - sensitivity
// Test.assertEquals(hasUniqueChars("++-"),false) 

//PSEDUO CODE: Write pseduo code for everything
    // Change string to a string with only unique characters. 
    // Compare both strings
    // Return true if stirngs are same length


// My Solution
    const hasUniqueChars = str => {
        let uniqueString = String.prototype.concat(...new Set(str))
        console.log(uniqueString)
        return uniqueString.length === str.length
    }

    console.log(hasUniqueChars('abcd'))


// Codewars Solution 

