// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//number with no extreme cases
//log each into the console or the word
//n = 15 -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

const fizzBuzz = num => {
    //for loop from 1
    for (let i = 1; i <= num; i++) {
    //conditional logic 
    // if num % 3 && % 5 console.log(fizzbuzz) 
    // if num % 3 console.log(fizz) 
    // if num % 5 console.log(buzz) 
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        }else if (i % 3 == 0) {
            console.log('fizz')
        }else if (i % 5 == 0) {
            console.log('buzz')
        }else {
            console.log(i)
        }

    }   
}






//Test
fizzBuzz(15)
// fizzBuzz(15) 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz