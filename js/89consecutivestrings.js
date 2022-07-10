console.log('codewars test')
// 7/10/22

// Kyu 6
// Consecutive strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

//Details

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


//PREP
//PARAMETER: What can you take in?
    // Take in an array of strings and an integer. 
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//PSEDUO CODE: Write pseduo code for everything
    // check for edge cases
    // use arr.map to create a new array of strings that are concatenated 
    // use


// My Solution
function longestConsec(starrr,k) {
    // Check for special cases
    if (starrr.length === 0 || k > starrr.length || k <= 0 ) {
        return ''
    } else {
        // Create a new array consisting of concatenated strings
        let arrayConcatanated = []
        starrr.map((x,i)=>{
            let concatenatedString = x
            let starrrIndex = i
            //concanate k number of times
            for (let i = 1; i < k; i++) {
                concatenatedString += starrr[starrrIndex+i]
            }
            //pushes new string to arrayConcanated 
            arrayConcatanated.push(concatenatedString)
        })
        // returns the first longest length string
        return arrayConcatanated.slice(0,arrayConcatanated.length-(k-1)).reduce((a,b)=>{
            return a.length >= b.length ? a : b
        })
    }
}


console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))
// Codewars Solution 

// function longestConsec(strarr, k) {
//     var longest = "";
//     for(var i=0;k>0 && i<=strarr.length-k;i++){
//       var tempArray = strarr.slice(i,i+k);
//       var tempStr = tempArray.join("");
//       if(tempStr.length > longest.length){
//         longest = tempStr;
//       }
//     }
//     return longest;
// }