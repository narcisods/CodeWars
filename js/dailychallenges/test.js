console.log('test');
// function delay(n) {
//     fetch
// }

// (async () => {
// 	console.time('testing delay');
// 	await delay(1000);
// 	console.timeEnd('testing delay');
// })();

function getNames(arr) {
	let namesArr = [];
	arr.forEach((obj) => {
		if (obj.hasOwnProperty('name')) {
			namesArr.push(obj.name);
		}
	});
	return namesArr;
}

console.log(
	'getnames',
	getNames([
		{ a: 1 },
		{ name: 'Jane' },
		{},
		{ name: 'Mark' },
		{ name: 'Sophia' },
		{ b: 2 },
	])
);
