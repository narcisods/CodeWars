console.log('codewars')
// 5/11/22  

// 7 Kyu
// Reverse Words

//Details
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// My Solution
let words = 'This is an example!'
console.log(reverseWords(words))

function reverseWords(str) {
    let arr = str.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr += arr[i].split('').reverse().join('') + " "
    }
    return newArr.trim()
  }

// Codewars Solution 
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

  function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }
