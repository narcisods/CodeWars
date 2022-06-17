console.log('codewars')
// 6/16/22

// Kyu 7
// Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

//Details

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29



//PREP
//PARAMETER: What can you take in?
    //A positive integer starting from 1
//RETURNS: How? print to console? Return?
    // Retrun an intger 
//EXAMPLES: Examples of how the code should work?
    // 2 --> 3+8
//PSEDUO CODE: Write pseduo code for everything
    // Create a loop that will count up to the row and exactly how many and which numbers are in that row


// My Solution
const rowSumOddNumbers = n => {
    count = 1
    let result = []
    for (let i = 0; i < n; i++){
        for (let  j = 0; j<=i; j++){
            result.push(count)
            count += 2
        }
        if (i == n-1) {
            return result.reduce((acc,c)=>acc+c)
        }
        result = []
 
    }
}

console.log(rowSumOddNumbers(10))
// Codewars Solution 

// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
//   }