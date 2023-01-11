//uncompress

// const uncompress = (s) => {
// 	const result = [];
// 	let numbers = '0123456789';
// 	let i = 0;
// 	let j = 0;

// 	while (j < s.length) {
// 		if (numbers.includes(s[j])) {
// 			j++;
// 		} else {
// 			const num = s.slice(i, j);
// 			for (let count = 0; count < num; count++) {
// 				result.push(s[j]);
// 			}
// 			j += 1;
// 			i = j;
// 		}
// 	}
// 	return result.join('');
// };

// console.log(uncompress('2c3a1t')); // -> 'ccaaat'

// const compress = (string) => {
// 	let result = [];
// 	let i = 0;
// 	let j = 0;
// 	while (j <= string.length) {
// 		if (string[i] === string[j]) {
// 			j++;
// 		} else {
// 			let num = j - i;
// 			if (num === 1) {
// 				result.push(string[i]);
// 			} else {
// 				result.push(num, string[i]);
// 			}
// 			i = j;
// 		}
// 	}
// 	return result.join('');
// };

// console.log(compress('ccaaatsss')); // -> '2c3at3s'

const anagrams = (s1, s2) => {
	const count = {};

	for (let char of s1) {
		if (!(char in count)) {
			count[char] = 0;
		}
		count[char]++;
	}

	for (let char of s2) {
		if (char in count) {
			count[char] -= 1;
		} else {
			return false;
		}
	}

	for (let char in count) {
		if (count[char] !== 0) {
			return false;
		}
	}
	return true;
};

//Turn into hash map

let str = 'panchopie';
let arr = ['k', 'i', 't', 't', 'y'];
let num = 12345;

const hashme = (thing) => {
	let count = {};
	for (let char of thing) {
		if (!(char in count)) {
			count[char] = 0;
		}
		count[char]++;
	}
	return count;
};

console.log(hashme(str));
console.log(hashme(arr));

// “Write a function to return an n element in Fibonacci sequence” is one of the most common questions you can hear during the coding challenge interview part. In this blogpost I’m going to walk through the two of the most typical solutions for this problem and also cover a dreadful (for most of novice developers) topic of time complexity.

const fibonacci = (n) => {
	if (n < 2) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};
//Test
