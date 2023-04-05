console.log('substring');

//Two strings...
//Find and return the largest number of matching consectuive substrings
//Example
const book1 = "The dog ran up to the man with it's tail wagging.";
const book2 = 'The cat ran up to the man then ran away.';
const copyCat = (str1, str2) => {
	let matchingCount = 0;
	let highest = 0;

	for (let i = 0; i < str1.length; i++) {
		//do something
		if (str1[i] === str2[i]) {
			matchingCount++;
			for (let j = i; j < str2.length; j++) {}
		} else {
			matchingCount = 0;
		}
		if (matchingCount > highest) highest = matchingCount;
	}
	return highest;
};

//Test case

console.log(copyCat(book1, book2));

//return ran up to the man -> 17 characters
