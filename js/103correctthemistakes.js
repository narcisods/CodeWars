console.log('codewars test')
// 7/26

// 8 Kyu
// Correct the mistakes of the character recognition software
// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

//Details
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.





//PREP
//PARAMETER: What can you take in?
    //string
//RETURNS: How? print to console? Return?
    //return a string replacing the numbers
//EXAMPLES: Examples of how the code should work?
    //    assert.strictEqual(correct("L0ND0N"),"LONDON");
    // assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    // assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    // assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    // assert.strictEqual(correct("PAR15"),"PARIS");
//PSEDUO CODE: Write pseduo code for everything
    // split, for each with conditionals, join


// My Solution
function correct (string) {
    let newStr = string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g,'I')
    return newStr
}


// Codewars Solution 

// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')