console.log('Codewars test')
// 10/5

// 7 Kyu
// Hells Kitchen

// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

//Details

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.




//PREP
//PARAMETER: What can you take in?
    // String

//RETURNS: How? print to console? Return?
    // String

//EXAMPLES: Examples of how the code should work?
    // ('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');

//PSEDUO CODE: Write pseduo code for everything
    // return split, map (add conditionals), join


// My Solution
const gordon = str => {
    return str.split('')
              .map(x =>{
                  if (x.match(/^[eiouEIOU]*$/)) {
                      return '*'
                  } else
                  if (x.match(/^[Aa]*$/)) {
                      return '@'
                  } else {
                  return x.toUpperCase()
                  }
            })
             .join('')
             .split(' ')
             .join('!!!! ') + '!!!!'
}

console.log(gordon('i am a chef'))
// Codewars Solution 

// const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");