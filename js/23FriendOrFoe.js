console.log('codewars')
// 5/16/22  

// 7 Kyu
// Friend or Foe?

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

//Details
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.



//PREP
//PARAMETER: What can you take in?
    // Takes in an array of strings
//RETURNS: How? print to console? Return?
    // Return *Keep orignal order of names
//EXAMPLES: Examples of how the code should work?
let friendTest = ["Ryan", "Kieran", "Mark"] //`shouldBe` ["Ryan", "Mark"]
 
//
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const friend = friends => friends.filter(str => str.length == 4)

    // filter out strings with exactly 4 characters
    // make an array out of the filtered names



//Test
console.log(friend(friendTest))

// Codewars Solution 

