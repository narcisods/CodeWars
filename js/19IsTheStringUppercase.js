console.log('codewars')
// 5.13.22

// 8 Kyu
// Is the string uppercase?
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

//Details
// Add the isUpperCase method to String to see whether the string is ALL CAPS. 



//PREP
//PARAMETER: What can you take in?
    //Takes in a string. Doesnt appear to take in special characters.
//RETURNS: How? print to console? Return?
    // Return a boolean
//EXAMPLES: Examples of how the code should work?
    //"c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
//PSEDUO CODE: Write pseduo code for everything
    //
stringTest = 'asdASD'
// console.log('asdASD'.isUpperCase())

// My Solution
String.prototype.isUpperCase = function() {
    //is toUppercase and compare it to orginal string
    //return boolean
    return this == this.toUpperCase() ? true : false
}
console.log(stringTest.isUpperCase())
// Codewars Solution 

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}