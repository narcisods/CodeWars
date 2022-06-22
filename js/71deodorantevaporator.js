console.log('codewars test')
// 6.21

// Kyu 7
// Deodorant Evaporator
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript

//Details

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29


//PREP
//PARAMETER: What can you take in?
    // Taking in 3 parameters. 
    // First paramter is the starting content of gas
    // The 2nd parmarter is the evap per day in a %.
    // Third parameter is the threshold at which the gas will be out of use. So if the content of gas is <= threshold then the gas is out of use.
//RETURNS: How? print to console? Return?
    //  Returning an integer 
//EXAMPLES: Examples of how the code should work?
    // evaportor(10,10,5) will give 29
//PSEDUO CODE: Write pseduo code for everything
    // Use a do while loop. If the threshold is < the  content of gas, then content * percent of evaporation
    // Return the amount of loops it took to get to content of gas below the threshold.


// My Solution

const evaporator = (content,evap,threshold) => {
    let i = 0
    let intinalContent = content
    do {
        content -= content * (evap/100)
        console.log(content)
        i++
    }
    while (((threshold/100)*intinalContent) < content) 
    return i
}

console.log(evaporator(10,10,5))

// Codewars Solution 
// function evaporator(content, evap_per_day, threshold){ 
//     var days = 0;
//     var gas = 100;
//       while(gas >= threshold){
//         gas -= gas * evap_per_day / 100;
//         days++;
//     }
//       return days;
//     }
