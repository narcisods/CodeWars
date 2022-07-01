console.log('codewars test')
// 6.30

// Kyu 8 
// DNA to RNA Conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

//Details

// eoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//PREP
//PARAMETER: What can you take in?
    // a string
//RETURNS: How? print to console? Return?
    // a string
//EXAMPLES: Examples of how the code should work?
    // above
//PSEDUO CODE: Write pseduo code for everything
    // split => map => join


// My Solution
function DNAtoRNA(dna) {
    return dna.split('').map(x=>x!=='T'? x : 'U').join('')
  }

// Codewars Solution 
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
//   }
