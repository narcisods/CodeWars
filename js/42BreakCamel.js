console.log('codewars')
// 5.25

// 6 Kyu
// Break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

//Details
// Complete the solution so that the function will break up camel casing, using a space between words.



//PREP
//PARAMETER: What can you take in?
    // a string
//RETURNS: How? print to console? Return?
    // return a string
//EXAMPLES: Examples of how the code should work?
test1 = "camelCasingIsLegit"  //=>  "camel Casing"
test2 = "identifier"   //  "identifier"

//PSEDUO CODE: Write pseduo code for everything
    // find each capital letter
    // add a space in front


// My Solution
// const solution = string => {
//    let arr = []
//    let arrLetters = []
//    for (let i = 0; i < string.length; i++) {
//     if (string[i] == string[i].toUpperCase()) {
//        arr.push(i)
//        arrLetters.push(string[i])

//     }
//     }
//     let arrString = string.split('')
//     for (let i = 0; i <arr.length;i++) {
//         arrString.splice(arr[i],1,` ${arrLetters[i]}`)
//     }
//     return arrString.join('')
// }



// Codewars Solution 

// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
//   }

// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }



  const solution = str => {
    let result = str.split('').map(element => {
        if (element == element.toUpperCase()) {
            element = ` ${element}`
        }
        return element
    })
    return result.join('')
  }

  console.log(solution(test1))
