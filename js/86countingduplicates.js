
console.log('codewars test')
// Date 7/7/22

// Kyu 6
// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

//Details

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.




//PREP
//PARAMETER: What can you take in?
    // a string, only alphabets contaiing upper and lower and digits // ignore casing
//RETURNS: How? print to console? Return?
    // return a number 
// //EXAMPLES: Examples of how the code should work?
//     //"abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//PSEDUO CODE: Write pseduo code for everything
    // create an empty object variable that will store the count for each value and use foreach method to iterate over the array. On each iteration, increment the count for the value by 1 or initilize it to 1 if it hasn't already been set
    //return the amount of objects that have 2+ counts on them


// My Solution
function duplicateCount(text){
    const count = {}
    text.toLowerCase().split('').forEach(element=> {
        count[element] = (count[element] || 0) + 1
    })
    result = 0
    for (let prop in count){
        if (count[prop] > 1) {
            result++
        }
    }
    return result
  }


  console.log(duplicateCount('aabbcde'))
// Codewars Solution 

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//   }