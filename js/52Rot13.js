console.log('codewars')
// 5/3/21

// 5 Kyu
// Rot 13
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

//Details
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".




//PREP
//PARAMETER: What can you take in?
    // a string of letters
//RETURNS: How? print to console? Return?
    // return a string
//EXAMPLES: Examples of how the code should work?
test1 = 'grfg' //test
//PSEDUO CODE: Write pseduo code for everything
    // Make a code a = m and so on
    // Also do it for uppercase
    // loop through string and convert every character


// My Solution
const rot13 = messages => {
    // convert string to number
    let arr = messages.split('')
    let arrNumbers = []
    for (let i = 0; i < arr.length; i++) {
        arrNumbers.push(arr[i].charCodeAt(0))
    }

    // add 13 or minus 13 to numbers conditionally
    let arr13 = arrNumbers.map((ele)=> {
        if (ele >= 65 && ele <= 78){
            return ele + 13
        } else if (ele >= 79 && ele <= 90){
            return ele - 13
        } else if (ele >= 110 && ele <= 122){
            return ele - 13 
        } else if (ele >= 97 && ele <= 109 ){
            return ele + 13
        } else {
            return ele
        }
    })

    // convert back to letters
    let arr13String = []
    for (let i = 0; i < arr13.length; i++) {
        arr13String.push(String.fromCharCode(arr13[i]))
    }
    return arr13String.join('')
}

console.log(rot13('abcdefghijklmnopqrstuvwxyz'))
// Codewars Solution 

// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
