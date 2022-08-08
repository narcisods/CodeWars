console.log('codewars test')
// 8/7/22

// 7 Kyu
// Find the vowels

// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

//Details

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].


//PREP
//PARAMETER: What can you take in?
    // A string
//RETURNS: How? print to console? Return?
    // Return an array of the index number of any vowel
//EXAMPLES: Examples of how the code should work?
    //Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
//PSEDUO CODE: Write pseduo code for everything
    // Turn string to an array, all lower case
    // Create an empty array
    // iterate through each string and return the index number of that value. Push that value to the empty array
    // return array


// My Solution
const vowelIndices= string => {
    let result = []
    string.toLowerCase().split('').forEach((element,index)=>{
        if (element.match(/[aeiouy]/gi)){
            result.push(index+1)
        }
    })
    return result
}

//Test
console.log(vowelIndices('super'))

// Codewars Solution 

function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
      if(/[aeioyu]/i.test(word[i])) {
        arr.push(i+1);
      }
    }
    return arr;
  }
  