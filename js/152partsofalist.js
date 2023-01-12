console.log('Codewars test');
// 1/10

// 7 kyu
// Parts of a list
// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

//Details
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

//PREP
//PARAMETER: What can you take in?
// Take in an array

//RETURNS: How? print to console? Return?
// Return a nested array

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
// intialize an empty array
// Join the inital array
// split at certain index level using a for loop compared to s

// My Solution
const partlist = (arr) => {
	let results = [];

	for (let i = 1; i < arr.length; i++) {
		results.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
	}
	return results;
};

// Codewars Solution

// function partlist(arr) {
// 	return arr
// 		.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
// 		.slice(1);
// }

// console.log(
// 	partlist(
// 		['az', 'toto', 'picaro', 'zone', 'kiwi'],
// 		[
// 			['az', 'toto picaro zone kiwi'],
// 			['az toto', 'picaro zone kiwi'],
// 			['az toto picaro', 'zone kiwi'],
// 			['az toto picaro zone', 'kiwi'],
// 		]
// 	)
// );

// [
// 	[['I', "wish I hadn't come"]],
// 	[['I wish', "I hadn't come"]],
// 	[['I wish I', "hadn't come"]],
// 	[["I wish I hadn't", 'come']],
// ],
// 	[
// 		['I', "wish I hadn't come"],
// 		['I wish', "I hadn't come"],
// 		['I wish I', "hadn't come"],
// 		["I wish I hadn't", 'come'],
// 	];

const events = [
	{ title: 'In The Zone', game: 'Warzone' },
	{ title: 'Springtown Slam', game: 'Super Smash Bros' },
	{ title: 'Guild Watch', game: 'Overwatch' },
];

const addGameType = (events) => {
	const gameTypes = {
		'In The Zone': 'In Person',
		'Springtown Slam': 'In Person',
		'Guild Watch': 'Online',
	};
	events.forEach((event) => {
		event.gameType = gameTypes[event.title];
	});
};
addGameType(events);
console.log(events);

events.pop();

console.log(events);
