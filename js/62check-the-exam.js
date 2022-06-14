console.log('codewars')
// 6/13/22  

// Kyu 7
// Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

//Details
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.




//PREP
//PARAMETER: What can you take in?
    // Two arrays of strings, both with the same amount of elements(4)
//RETURNS: How? print to console? Return?
    // Return a number
//EXAMPLES: Examples of how the code should work?
test1 = (["a", "a", "b", "b"], ["a", "c", "b", "d"]) // 6
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const checkExam = (arr1,arr2) => {
    let score = 0
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i],arr2[i])
        if (arr1[i] == arr2[i]) {
            score += 4
        } else if (arr2[i]==""){
            score += 0
        } else {
            score -= 1
        }
    }
    if (score <= 0) {
        return 0
    } else {
        return score
    }
}

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))

// Codewars Solution 


// function checkExam(array1, array2) {
// var score = 0;
  
//   for (var i = 0; i < array1.length; i++){
  
//     if (array1[i] == array2[i]) {
    
//     score += 4;
    
//     }
    
//     else if (array2[i] === ""){

//       score += 0
  
//     }
    
     
//     else {
    
//     score -= 1
    
//     }

  
//   }
  
//   if (score < 0) {
  
//     score = 0
    
//   }  
 
//  return score
 
// }