console.log('codewars test')
// 7/2/22

// Kyu 7
// Growth of a Population

// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

//Details
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?



//PREP
//PARAMETER: What can you take in?
    //I take in 4 different parameters. 
    // p0- starting population
    // perecent - perecent increase of population
    // aug - new inhabitanats
    // p - target population
//RETURNS: How? print to console? Return?
    // Return the year that the target population has been met
//EXAMPLES: Examples of how the code should work?
    // nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
//PSEDUO CODE: Write pseduo code for everything
    // while loop which counts up +1 everytime the loop is iterated 
    // once population is >= target popluation, end loop and return the count
    // in the loop take population, mutiply by (percent / 100) + aug 


// My Solution
function nbYear(population, percent, addition,target) {
    years = 0
    while(population<target) {
        population += Math.floor((population * (percent/100)) + addition)
        years++

    }
    return years
}


// Codewars Solution 
// function nbYear(p0, percent, aug, p) {
    
//     for (var years = 0; p0 < p; years++) {
//       p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years
//   }

