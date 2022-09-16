console.log('Codewars test')
// 9/16/22

// 7 Kyu
// Array.prototype.reverse()
// https://www.codewars.com/kata/53b2ff49b82af296ce001139

//Details
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

// Here's an example:

// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array



//PREP
//PARAMETER: What can you take in?
    // Take in an array

//RETURNS: How? print to console? Return?
    // Return an array

//EXAMPLES: Examples of how the code should work?
    // 

//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
Array.prototype.reverse = function() {
    for (let i = 0; i < this.length/2; i++ ){
      let temp = this[i]
      this[i] = this[this.length-(i+1)]
      this[this.length-(i+1)] = temp
      }
      return this
    };

// Codewars Solution 

// Array.prototype.reverse = function() {
//     for(var i = 0, j = this.length-1; i < j; i++, j--) {
//       var tmp = this[i];
//       this[i] = this[j];
//       this[j] = tmp;
//     }
//     return this;
//   };