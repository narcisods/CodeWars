console.log('codewars test')
// 7/12
// Kyu 7
// Complementary DNA

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

//Details
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


//PREP
//PARAMETER: What can you take in?
    //  String
//RETURNS: How? print to console? Return?
    // Return Uppercase string
//EXAMPLES: Examples of how the code should work?
    // 
//PSEDUO CODE: Write pseduo code for everything
    // split the string into an array
    // .map method where it checks and replaces A for T and C for G. 
    // join and return string


// My Solution
function DNAStrand(dna){
    return dna.split('')
              .map(x=>{
                switch(x) {
                    case 'A' : 
                        return 'T'
                    case 'T' : 
                        return 'A'
                    case 'C' : 
                        return 'G'
                    case 'G' : 
                        return 'C'
                    }
                })
              .join('')
}




// Codewars Solution 

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }