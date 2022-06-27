console.log('codewars test')
// 6.27.22

// Kyu 7
// Money money money
// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
//Details
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest



//PREP
//PARAMETER: What can you take in?
    // Take in 4 parameters
    // Principal - which is the orignal amount that will be invested
    // Interest - The rate the amount will increase
    // Tax rate - The amount of taxes that will be taken away. The tax only applies on the amount accrued via interest 
    // Desired sum - The amount that mr. scrooge is targeting for when interest gets applied over the years
//RETURNS: How? print to console? Return?
    // Return the amount of years that it will take for the inital amount to grow to desired sum
//EXAMPLES: Examples of how the code should work?
    //  Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
//PSEDUO CODE: Write pseduo code for everything
    // write a conditinal that checks if principal is >= desired sum - return 0 years
    // create a while loop
        // while loop
        // while principal is < desired
                // yearsPassed ++
                // principal * intrest = increasedAmount  then taxedIncreasedAmount = increasedAmount -(increasedAmount * taxrate)
                // principal += taxedIncreasedAmount
                // return yearsPassed

// My Solution
function calculateYears(principal,interest,tax,desired) {
    let yearsPassed = 0
        while (principal < desired) {
        yearsPassed++
        let increasedAmount = principal * interest 
        let taxedIncreasedAmount = increasedAmount - (increasedAmount*tax)
        principal += taxedIncreasedAmount
        }
    return yearsPassed
}

console.log(calculateYears(1000,.05,.18,1100))
// Codewars Solution 

