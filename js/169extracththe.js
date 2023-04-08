console.log('Codewars test');
// 4/10

// 5 Kyu
// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// //Details
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
// //PREP
//PARAMETER: What can you take in?
// Take in a string

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
function domainName(url) {
	let start = 0;

	if (url.includes('www')) {
		start = url.indexOf('www.') + 4;
	} else if (url.includes('//')) {
		start = url.indexOf('//') + 2;
	}

	let newStr = url.slice(start);
	let ending = newStr.indexOf('.');

	return newStr.slice(0, ending);
}

// Test Cases
console.log(domainName('http://zombie-bites.com'));
// Codewars Solution
function domainName(url) {
	url = url.replace('https://', '');
	url = url.replace('http://', '');
	url = url.replace('www.', '');
	return url.split('.')[0];
}
//test
//test
