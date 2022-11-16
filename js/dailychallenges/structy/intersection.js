console.log('structy');
// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
	let intersec = [];
	const mySet = new Set();
	for (let i = 0; i < a.length; i++) {
		mySet.add(a[i]);
	}
	for (let i = 0; i < b.length; i++) {
		if (mySet.has(b[i])) {
			intersec.push(b[i]);
		}
	}
	return intersec;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]

console.log(intersection([2, 4, 6], [4, 2])); // -> [2,4]

console.log(intersection([4, 2, 1], [1, 2, 4, 6])); // -> [1,2,4]

console.log(intersection([0, 1, 2], [10, 11])); // -> []
