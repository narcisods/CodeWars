console.log('codewars test')
// 8/1

// 8 Kyu
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript

//Details

// Remove n exclamation marks in the sentence from left to right. n is positive integer.



//PREP
//PARAMETER: What can you take in?
    // Take in a string and an integer 
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
//     // remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
//PSEDUO CODE: Write pseduo code for everything
    // split string into an array
    // Run a loop n times
    // in loop arr.find !
    // remove that index
    // return array.join('') 


// My Solution
const remove = (string,number) => {
    let array = string.split('')
    for (let i = 0;i < number;i++) {
        delete array[array.findIndex(x => x ==='!')]
    } 
    return array.join('')
}

console.log(remove('Hello!',1))
// Codewars Solution 

// function remove(s,n){
//     for (var i=0;i<n;i++) s=s.replace("!","");
//     return s;
//   }