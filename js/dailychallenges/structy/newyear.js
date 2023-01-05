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

const compress = (string) => {
	let result = [];
	let i = 0;
	let j = 0;
	while (j <= string.length) {
		if (string[i] === string[j]) {
			j++;
		} else {
			let num = j - i;
			if (num === 1) {
				result.push(string[i]);
			} else {
				result.push(num, string[i]);
			}
			i = j;
		}
	}
	return result.join('');
};

console.log(compress('ccaaatsss')); // -> '2c3at3s'
