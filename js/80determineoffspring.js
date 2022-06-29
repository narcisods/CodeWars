console.log('codewars test')
// 6/28

// Kyu 8
// Determine offspring sex based on genes XX and XY chromosomes

// https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript

//Details
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";



//PREP
//PARAMETER: What can you take in?
    // A string of either XY XX
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const chromosomeCheck = sperm => sperm == 'XY' ? 
  "Congratulations! You're going to have a son." :
  "Congratulations! You're going to have a daughter.";


// Codewars Solution 
// function chromosomeCheck(sperm) {
//     return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
//   }
