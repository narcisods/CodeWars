console.log('codewars test')
// 7/27

// 6 Kyu
// Encrypt This!
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

//Details
// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.




//PREP
//PARAMETER: What can you take in?
    // Take in a string. No special characters. Yes takes numbers
//RETURNS: How? print to console? Return?
    // Return a string of the encrypted message.
//EXAMPLES: Examples of how the code should work?
    // encryptThis("Hello") === "72olle"
    // encryptThis("good") === "103doo"
    // encryptThis("hello world") === "104olle 119drlo"
//PSEDUO CODE: Write pseduo code for everything
    // Split words into an array


// My Solution
const encryptThis = string => {
    //split into an array of words
    let array = string.split(' ')
    //iterate through each word
    for (let i = 0; i < array.length; i++) {        
        let newArray = array[i].split('')
        if (newArray.length === 1) {
        newArray[0] = newArray[0].charCodeAt()
        }else {
        let swap = newArray[1]
        newArray[1] = newArray[newArray.length-1]
        newArray[newArray.length-1] = swap
        newArray[0] = newArray[0].charCodeAt()
        }
        let encrypted = newArray.join('')
        array[i] = encrypted
    }
    return array.join(' ')
}

console.log(encryptThis('A wise old owl lived in an oak'))
// Codewars Solution 

// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');