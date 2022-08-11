console.log('codewars test')
// 8/11

// 7 Kyu
// Alphabet War
// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

//Details

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.


//PREP
//PARAMETER: What can you take in?
    // Take in a string of letters
//RETURNS: How? print to console? Return?
    // Return who wins
//EXAMPLES: Examples of how the code should work?
    //alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
//PSEDUO CODE: Write pseduo code for everything
    //set a value for each special letter
    //iterate through string to see what the value is
    //return who wins


// My Solution
const alphabetWar = fight => {
    let score = 0
    fight.split('').forEach(x=>{
        console.log(x)
        switch (x) {
            case 'm' : score += 4
            break
            case 'q' : score += 3
            break
            case 'd' : score += 2
            break
            case 'z' : score += 1
            break
            case 'w' : score -= 4
            break
            case 'p' : score -= 3
            break
            case 'b' : score -= 2
            break
            case 's' : score -= 1
            break
        }
    })
    if (score > 0) {
        return "Right side wins!"
    } else if (score < 0) {
        return "Left side wins!"
    } else {
        return "Let's fight again!"
    }
        
}

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}


// Codewars Solution 

