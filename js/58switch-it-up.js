console.log('codewars')
// 6/7/22

// Kyu 8
// Switch it up
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/javascript

//Details
    // When provided with a number between 0-9, return it in words.

    // Input :: 1
    
    // Output :: "One".
    
    // If your language supports it, try using a switch statement.
    
    

//PREP
//PARAMETER: What can you take in?
    // Take in a number
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
    //1 = 'one'
//PSEDUO CODE: Write  Use a switch case for this

const switchItUp = number => {
    switch(number) {
        case 0: return 'Zero'
        case 1: return 'One'
        case 2: return 'Two'
        case 3: return 'Three'
        case 4: return 'Four'
        case 5: return 'Five'
        case 6: return 'Six'
        case 7: return 'Seven'
        case 8: return 'Eight'
        case 9: return 'Nine'
    }
}

// My Solution


// Codewars Solution 

// function switchItUp(number) {
//     switch (number) {
//       case 0: return 'Zero';
//       case 1: return 'One';
//       case 2: return 'Two';
//       case 3: return 'Three';
//       case 4: return 'Four';
//       case 5: return 'Five';
//       case 6: return 'Six';
//       case 7: return 'Seven';
//       case 8: return 'Eight';
//       case 9: return 'Nine';
//     }
//   }