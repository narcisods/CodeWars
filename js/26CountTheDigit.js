console.log('codewars')
// 5.18.22

// 7 Kyu
// Count the digit
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

//Details
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.



//PREP
//PARAMETER: What can you take in?
    // Two arguments n and g. n will be a postivie integer and d will be 1-9 single digit 
//RETURNS: How? print to console? Return?
    // Return the numbers of digits of N in the n squared
//EXAMPLES: Examples of how the code should work?
    //n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.


//PSEDUO CODE: Write pseduo code for everything
    //Start by squaring all digits from 0 to n. Put in an array
    //In that array, turn into one consectuive string by joining
    //Count all digits(n) in that string
    //Return that number


// My Solution
const nbDig = (n,d) => {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i*i)
    }
    return arr.join('').split('').filter(ele => ele == d).length
}

//Call function
console.log(nbDig(10,1))
// Codewars Solution 
function nbDig(n, d) {
    var res=0;
        for (var g=0;g<=n;g++){
          var square=(g*g+"").split("");
          square.forEach((s)=>s==d?res++:null)
        }return res;
    }
