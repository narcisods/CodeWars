console.log('Codewars test');
// 10/03

// 6 Kyu
// Help the bookseller !
// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

//Details
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

// Notes:
// In the result codes and their values are in the same order as in M.
// See "Samples Tests" for the return.

//PREP
//PARAMETER: What can you take in?
// Given two arrays
// First array, each elemnt is a string, Each string has two parts seperated by a space. First part is a serious of capitalized alpha characters. 2nd is a number
// Array 2 - is an array of letters, which are basically request. Each letter is requesting the sum of the numbers associated with the first letter of that element in array A.

//RETURNS: How? print to console? Return?
// Return a string

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution

const sumOfSelectedLetter = (dataArray, request) => {
	return dataArray
		.map((element) => {
			if (element[0] == request) {
				return Number(element.split(' ')[1]);
			} else {
				return 0;
			}
		})
		.reduce((acc, c) => acc + c, 0);
};

const stockList = (dataArray, requestArray) => {
	if (!dataArray.length || !requestArray.length) return '';
	return requestArray
		.map((element) => {
			return `(${element} : ${sumOfSelectedLetter(
				dataArray,
				element
			).toString()})`;
		})
		.join(' - ');
};

// Test cases
console.log(
	stockList(
		['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
		['A', 'B', 'C', 'D']
	),
	'| ' + '(A : 0) - (B : 1290) - (C : 515) - (D : 600)'
);

console.log(
	stockList(
		['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
		['A', 'B']
	),
	'| ' + '(A : 200) - (B : 1140)'
);
