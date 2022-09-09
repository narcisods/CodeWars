console.log('codewarstest')
// 9/9/22

// 7 Kyu
// Sort by Last Char
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

//Details
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



//PREP
//PARAMETER: What can you take in?
    // A string of words

//RETURNS: How? print to console? Return?
    // Return an array of words

//EXAMPLES: Examples of how the code should work?
    //      assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    // assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
    // assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    

//PSEDUO CODE: Write pseduo code for everything
    // Split words into an array
    // Sort by last character in each word
    // return array


// My Solution
const last = str => {
    return str.split(' ').sort((a,b)=>{
      if (a[a.length - 1] > b[b.length - 1])
          return 1;
      else if (a[a.length - 1] < b[b.length - 1])
    return -1;
  })
}

// Codewars Solution 
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }