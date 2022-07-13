console.log('codewars test')
// 7.13.22

// Kyu 7
// Mumbling

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

//Details
// This time no story, no theory. The examples below show you how to write function accum:





//PREP
//PARAMETER: What can you take in?
    // A string. Only letters. Can be different casing 
//RETURNS: How? print to console? Return?
    // Return the result
//EXAMPLES: Examples of how the code should work?
    //accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//PSEDUO CODE: Write pseduo code for everything
    // Create an empty results string
    // Turn string into an array
    // Iterate through that array
    // Add to empty string element times the index+1 // first letter should be capitilized // then add a dash

// My Solution
function accum(s) {
    return s.split('').map((char,i)=>char.toUpperCase()+(char.toLowerCase().repeat(i))).join('-')
}
// Codewars Solution 

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }