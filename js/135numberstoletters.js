console.log('Codewars test')
// Date

// 7 kyu
// Numbers to Letters
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

//Details
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.



//PREP
//PARAMETER: What can you take in?
    // An array of numbers

//RETURNS: How? print to console? Return?
    // Return a string

//EXAMPLES: Examples of how the code should work?
    // //    assert.strictEqual(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
    // assert.strictEqual(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
    // assert.strictEqual(switcher(['4', '24']), 'wc')

//PSEDUO CODE: Write pseduo code for everything
    // Map array to change numbers to letters. Join array into string


// My Solution
const switcher = x => {
    return x.map(char=>{
        switch(char) {
            case '29' : return ' '
            case '28' : return '?'
            case '27' : return '!'
            case '26' : return 'a'
            case '25' : return 'b'
            case '24' : return 'c'
            case '23' : return 'd'
            case '22' : return 'e'
            case '21' : return 'f'
            case '20' : return 'g'
            case '19' : return 'h'
            case '18' : return 'i'
            case '17' : return 'j'
            case '16' : return 'k'
            case '15' : return 'l'
            case '14' : return 'm'
            case '13' : return 'n'
            case '12' : return 'o'
            case '11' : return 'p'
            case '10' : return 'q'
            case '9' : return 'r'
            case '8' : return 's'
            case '7' : return 't'
            case '6' : return 'u'
            case '5' : return 'v'
            case '4' : return 'w'
            case '3' : return 'x'
            case '2' : return 'y'
            case '1' : return 'z'
        }
    }).join('')
}

console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']))


// Codewars Solution 

// function switcher(x)
// {
//   return x.map(a => 
//     {
//       if(a == 27) return "!";
//       if(a == 28) return "?";
//       if(a == 29) return " ";
//       return String.fromCharCode(97 + 26 - parseInt(a));
      
//     }).join('');
// }

// const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
// const switcher = x => x.map(item => alpha[item]).join('')
