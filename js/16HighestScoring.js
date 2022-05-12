console.log('codewas')
// 5/12/22

// Kyu 6
// Title Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

//Details
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//Example
let str = 'man i need a taxi up to ubud'
let strOne = 'abc'
console.log(high(str))

//Answer - Taxi

// My Solution
function high(x) {
    let newArr=x.split(' ')
    let newNewArr = []
    for (let i = 0; i < newArr.length; i++) {
        newNewArr.push(alphabetPosition(newArr[i]))
    }
    return(newArr[newNewArr.indexOf(Math.max(...newNewArr))])

}



//string to number
function alphabetPosition(text) {
    let result = 0
    for (let i = 0; i < text.length; i++) {
        result += (text.charCodeAt(i) - 96)
    }
    return result
  }



// Codewars Solution 
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }
