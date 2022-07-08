console.log('codewars test')
// 7/8  

// Kyu 7
// Title Printer Errors
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

//Details

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.


//PREP
//PARAMETER: What can you take in?
    // Take in a string of letters a to z
//RETURNS: How? print to console? Return?
    // Return a string 
//EXAMPLES: Examples of how the code should work?
    // s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
//PSEDUO CODE: Write pseduo code for everything
    // Make a good count / bad count
    // Iterate through string
    // + 1 for good letters - 1 for bad letters
    // Template literal to return the answer


// My Solution
function printerError(s) {
    let errors = 0
    s.split('').forEach(x=>{
        let numValue = x.charCodeAt(0) - 97
        if (numValue > 12) {
            errors++
        }
    })
    return `${errors}/${s.split('').length}`
}
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
// Codewars Solution 

// function printerError(s) {
//     // your code
//     var count = 0;
//     for(var i = 0; i < s.length; i++) {
//       if (s[i] > "m") {
//         count++;
//       }
//     }
//     return count+"/"+s.length;
// }