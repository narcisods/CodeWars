console.log('codewars test')
// Date 6/26

// Kyu 8
// Enumerable Magic #25 - Take the First N Elements
// https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

//Details
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



//PREP
//PARAMETER: What can you take in?
    // Take in an array and an integer
//RETURNS: How? print to console? Return?
    // Return an array with the number of elements that the 2nd parameter states
//EXAMPLES: Examples of how the code should work?
    //take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
//PSEDUO CODE: Write pseduo code for everything
    //Create a for loop that will end n number of times
    //Push an element to return array n number of times
    //Return new array


// My Solution
function take(arr,n) {
    results = []
    for (let i = 0; i < n; i++) {
        if (arr[i]==undefined) {
            return results
        } else {
        results.push(arr[i])
    }
}
    return results
}

// Codewars Solution 


function take(arr, n) {
    return arr.slice(0, n);
  }


