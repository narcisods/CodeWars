console.log('codewars test')
// 6.23

// Kyu 8
// Hello, Name or World
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

//Details
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).





//PREP
//PARAMETER: What can you take in?
    //  Takes in a string that is a name
//RETURNS: How? print to console? Return?
    // Hello,world or Hello, Name which is the arugment thats passed in
//EXAMPLES: Examples of how the code should work?
    // "joHn" => "Hello, John!"
    // "" => "Hello, World!"
//PSEDUO CODE: Write pseduo code for everything
    // function called hello takes in a name
    // name first check if its empty and if it is, return hello world
    // if its a string, turn it all lowercase, then turn the first letter uppercase, then return hello, name


// My Solution
function hello(name) {
    if (name === '' || name === undefined) {
        return 'Hello, World!'
    } else {
        let lowerCaseName = name.toLowerCase()
        let properCaseName = lowerCaseName[0].toUpperCase()+lowerCaseName.slice(1)
        return `Hello, ${properCaseName}!`
    }
}

// Codewars Solution 
// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
