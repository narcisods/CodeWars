console.log('codewars test')
// 07/25

// 7 Kyu
// Sum of numbers from 0 to N
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

//Details
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.



//PREP
//PARAMETER: What can you take in?
    //
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let result = 0
      let string = ''
      if (count < 0) {
        return `${count}<0`
      } else if (count === 0){
        return '0=0'
      } else {
      for (i = 0; i <= count; i++) {
        result += i
        string += `${i}+`
      }}
        return `${string.slice(0,-1)} = ${result}`  
    };
  
    return SequenceSum;
  
  })();

// Codewars Solution 

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      var sum = 0;
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i;
          str += i + "+";
        };
      sum += count;
      str += count + " = " + sum;
      return str;
      };
    };
  
    return SequenceSum;
  
  })();