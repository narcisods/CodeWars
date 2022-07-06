console.log('codewars test')
// 7/6/2022

// Kyu 6
// Mexican Wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript

//Details
// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat



//PREP
//PARAMETER: What can you take in?
    // A string, will always be all lower case, can have spaces and can be empty
//RETURNS: How? print to console? Return?
    // Return an array of strings where each letter is capitalized
//EXAMPLES: Examples of how the code should work?
    //wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//PSEDUO CODE: Write pseduo code for everything
    // Create an empty array for the results
    // Iternate through string, turn everything in the string lowercase - then turn each index uppercase, push to results array
    // Return array


// My Solution

function wave(str){
    let waveStr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i]!== (' ')) {
        arrStr = str.toLowerCase().split('')
        arrStr[i] = arrStr[i].toUpperCase()
        waveStr.push(arrStr.join(''))
    }
}
    return waveStr
}

console.log(wave('hello world'))

// Codewars Solution 

