console.log('Codewars test')
// 10/9/22

// 7 Kyu
// Bumps in the Road

// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

//Details

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


//PREP
//PARAMETER: What can you take in?
    // Take in a string

//RETURNS: How? print to console? Return?
    // Return a string to console

//EXAMPLES: Examples of how the code should work?
    //    assert.strictEqual(bump("n"), "Woohoo!");

//PSEDUO CODE: Write pseduo code for everything
    // Count amount of n's in string. Return whoo if 15 and below else return car dead


// My Solution
const bump = x => {
   let countOfN = x.split('').reduce((acc,c)=>  (c === 'n') ? acc+1 : acc+0,0)
    return countOfN <= 15 ? 'Woohoo!': 'Car Dead'
}


// const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

// Codewars Solution 

