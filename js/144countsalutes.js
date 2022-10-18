console.log('Codewars test');
// 10/18/22

// 7 Kyu
// Count salutes
// https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed

// //Details
// Description
// There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

// Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
// Note: 2 salutes occur when people meet, one to the other and vice versa.

// Input
// People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

// Examples
// Input: >----->-----<--<
// Output: 8

// Explanation: Both guys moving right will meet both guys moving left.
// Hence a total of 4 meetings will occur and 8 salutes will occur.

// Input: <---<--->----<
// Output: 2

// Explanation: Only one meeting occurs.

//PREP
//PARAMETER: What can you take in?
// Taking in a string

//RETURNS: How? print to console? Return?
// Return a number

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//split into an array
//itereate through each array using selected element
//and if selected element is '>' and othe element is '<' => salute count +2
//return the count

// My Solution
const countSalutes = (hallway) => {
	// Variables
	let salutes = 0;
	let hallwayArray = hallway.replace(/-/g, '').split('');
	// Count Salutes
	hallwayArray.forEach((person, index) => {
		for (let i = 0; i < hallwayArray.length; i++) {
			if (person === '>' && hallwayArray[i] === '<' && i > index) {
				salutes = salutes + 2;
			}
		}
	});
	// return Salutes
	return salutes;
};

// Codewars Solution
// function countSalutes(hallway) {
//     let right = 0;
//     let salutes = 0;
//     for (let p of [...hallway]) {
//       if (p === '>') right += 1;
//       else if (p === '<') salutes += 2 * right;
//     }
//     return salutes;
//   }

//test cases

console.log(countSalutes('>----->-----<--<'), 8);
console.log(countSalutes('<---<--->----<'), 2);
