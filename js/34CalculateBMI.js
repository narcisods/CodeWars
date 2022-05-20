console.log('codewars')
// 5.20.22

//8 Kyu
// Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

//Details
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



//PREP
//PARAMETER: What can you take in?
    // 2 integers
//RETURNS: How? print to console? Return?
    // return a string
//EXAMPLES: Examples of how the code should work?
    // if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
//PSEDUO CODE: Write pseduo code for everything
    // Calculate bmi then use conditionals to return strings


// My Solution
function bmi(weight, height) {
  let result = weight/(height*height)
  return result <= 18.5 ? 'Underweight'
  : result <= 25 ? 'Normal'
  : result <= 30 ? 'Overweight'
  : 'Obese'
}

// Codewars Solution 
function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }
