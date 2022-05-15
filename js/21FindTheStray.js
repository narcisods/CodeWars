console.log('codewars')
// 5/14

// 7 Kyu
// Find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

//Details
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)



//PREP
//PARAMETER: What can you take in?
    // Odd length array of integers, all of them are the same but one The input wil always be odd-length >= 3
//RETURNS: How? print to console? Return?
    // Return
//EXAMPLES: Examples of how the code should work?
    //[1, 1, 2] ==> 2
let test = [17, 17, 3, 17, 17, 17, 17] //==> 3

//PSEDUO CODE: Write pseduo code for everything
    // 


// My Solution
// function stray(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//        if (arr [i] != arr [i+1]){

//        }
//         else if (arr[i] == arr[i+1]) {

//        } else (arr[i] != arr[i+1]) {
//            return arr[i+1]
//        }
       
//     }
//   }

const stray = (arr) => {
    arr.sort((a,b) => a - b, 0) 
    return arr[0] == arr[1] ? arr[arr.length-1] : arr[0]
}
  console.log(stray(test))



// Codewars Solution 

