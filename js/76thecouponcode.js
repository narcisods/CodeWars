console.log('codewars test')
// 6.25

// Kyu 7
// The Coupon Code
// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

//Details

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".




//PREP
//PARAMETER: What can you take in?
    // Take in 4 parameters, enteredCode, correctCode,Current Date, expiration Date
//RETURNS: How? print to console? Return?
    // return a boolean to the console
//EXAMPLES: Examples of how the code should work?
    //checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//PSEDUO CODE: Write pseduo code for everything
    // write a conditional that compares the two codes and also if the current date is less than expiration date


// My Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode && new Date(expirationDate)>= new Date(currentDate)) {
       return true
    } else {
        return false
    }
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 10, 2015"))
// Codewars Solution 

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
//   }