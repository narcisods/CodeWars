console.log('Codewars test')
// 10/6

// 7 Kyu
// sPoNgEbOb MeMe
// https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript



//Details

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.


//PREP
//PARAMETER: What can you take in?
    // String

//RETURNS: How? print to console? Return?
    // Return a string

//EXAMPLES: Examples of how the code should work?
    // 

//PSEDUO CODE: Write pseduo code for everything
    // use map to captialize or lowercase every other character in its index


// My Solution
function spongeMeme(sentence) {
    return sentence.split('')
            .map((char,index) => {
                return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    }).join('')
}

// Codewars Solution 


// function spongeMeme(sentence) {
//     return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
//     } 
    