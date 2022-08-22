console.log('Codewars test')
// 08/22/22

// 7 Kyu
// JavaScript Array Filter
// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

//Details

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:


//PREP
//PARAMETER: What can you take in?
    //An array of numbers

//RETURNS: How? print to console? Return?
    //

//EXAMPLES: Examples of how the code should work?
    //getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
function getEvenNumbers(numbersArray) {
    let newArr = numbersArray.filter(x=>x%2===0)
    return newArr
}
// Codewars Solution 

const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);