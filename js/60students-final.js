console.log('codewars')
// 6.11.22

// Kyu 8
// Student's Final Grade
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

//Details
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases



//PREP
//PARAMETER: What can you take in?
    // Two parameters
//RETURNS: How? print to console? Return?
    // Return a score/grade as an integer
//EXAMPLES: Examples of how the code should work?
    // 100,12 -> 100
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const finalGrade = (exam, projects) => 
      exam > 90 || projects > 10 ? 100 
    : exam > 75 && projects >= 5 ? 90
    : exam > 50 && projects >= 2 ? 75
    : 0


// Codewars Solution 

// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10) return 100;
//     if(exam > 75 & projects >= 5) return 90;
//     if(exam > 50 & projects >= 2) return 75;
//     return 0;
//   }