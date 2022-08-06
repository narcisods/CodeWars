console.log('codewars test')
// 8/5  

// 7 Kyu
// Regex validate PIN code

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// //Details
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.



//PREP
//PARAMETER: What can you take in?
    // a string of numbers  
//RETURNS: How? print to console? Return?
    // return true or false 
//EXAMPLES: Examples of how the code should work?
    // "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
//PSEDUO CODE: Write pseduo code for everything
    // Check if any element is equal to a digit and write a conditional if it has a length of 4 digits or 6 digits 

// My Solution
const validatePIN = (pin) => pin.length === 4 || pin.length === 6 ? /^[0-9]+$/.test(pin) : false


console.log(validatePIN('122d34'))


// Codewars Solution 
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }

//   function validatePIN (pin) {
//     //return true or false
//     var n = pin.length;
//     if( n != 4 && n != 6)
//         return false;
//     for (var i in pin)
//         if (pin[i] > '9' || pin[i] < '0')
//             return false;
//     return true;
//   }