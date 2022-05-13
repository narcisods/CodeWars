console.log('codewars')
// 5.13.21

// 7 Kyu
// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

//Details
//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.




//PREP
//PARAMETER: What can you take in?
    // A string. No vairables that are extreme  
//RETURNS: How? print to console? Return?
    // Return
//EXAMPLES: Examples of how the code should work?
    //("bitcoin take over the world maybe who knows perhaps"), 3
    let test = 'bitcoin take over the world maybe who knows perhaps'
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const findShort= (s) => {
    //split string into an array of words
    let arr = s.split(' ')
    //count amount of characters are in each word
    let arrNumber = []
    for (let i = 0; i < arr.length; i++) {
        arrNumber.push(arr[i].length)
    }
    //return lowest number
    return arrNumber.sort((a,b)=> a-b,0)[0]
}




// console.log(findShort(test))
// // Codewars Solution 
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }
