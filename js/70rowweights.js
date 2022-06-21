console.log('codewars test')
// Date 6.20

// Kyu 7
// Row Weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

//Details
// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Array size is at least 1.
// All numbers will be positive.


//PREP
//PARAMETER: What can you take in?
    // An array of numbers
//RETURNS: How? print to console? Return?
    // Return an array 
//EXAMPLES: Examples of how the code should work?
    // [13,27,49] ==> (62,27)
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const rowWeights = array => {
    let teamOne = array.reduce((c,acc,index)=> index % 2 === 0 ? c + acc : c + 0, 0)
    let teamTwo = array.reduce((c,acc,index)=> index % 2 !== 0 ? c + acc : c + 0, 0)
    console.log(teamOne,teamTwo)
    return [teamOne,teamTwo]
}
console.log(rowWeights([13,27,49]))
// Codewars Solution 

// function rowWeights(array){
//     let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
//     let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
//     return [t1, t2]
//   }