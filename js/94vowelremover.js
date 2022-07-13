console.log('codewars test')
// 7/12

// Kyu 8
// Vowel Remover
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

//Details
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata




//PREP
//PARAMETER: What can you take in?
    // string
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
function shortcut (string) {
    return string.split('').filter(x=>{
      return x !== 'a'&& x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u'
    }).join('')
  }

// Codewars Solution 

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }