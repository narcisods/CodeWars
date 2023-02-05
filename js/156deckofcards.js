// Print a deck of cards
// Write a function, that once called, will print the following

// {['2H','3H',... 'JH','AH'],['2D',...],['2S',...],['2C',...]}

// const printDeck = (_) => {
// 	// Suits - Heart = H, Diamond = D, Clubs = C, Spades = S
// 	const suits = ['H', 'D', 'C', 'S'];
// 	let suitPointer = 0;
// 	while (suitPointer < 4) {
// 		for (let i = 1; i < 14; i++) {
// // 			console.log(i + suits[suitPointer]);
// // 		}
// // 		suitPointer++;
// // 	}
// // };

// // printDeck();

// const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// const values = [
// 	'Ace',
// 	'2',
// 	'3',
// 	'4',
// 	'5',
// 	'6',
// 	'7',
// 	'8',
// 	'9',
// 	'10',
// 	'Jack',
// 	'Queen',
// 	'King',
// ];

// let deck = [];

// for (const suit of suits) {
// 	for (const value of values) {
// 		deck.push(value + ' of ' + suit);
// 	}
// }

// console.log(deck.join('\n'));

//Print out a deck of cards

//Create an array of Suits
//Create an array of Values
//Create a function that iterates through both arrays

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [
	'Ace',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'Jack',
	'Queen',
	'King',
];

const deck = [];

const makeDeck = () => {
	for (const suit of suits) {
		for (const value of values) {
			deck.push(`${value} of ${suit}`);
		}
	}
};
makeDeck();
console.log(deck.join('\n'));
