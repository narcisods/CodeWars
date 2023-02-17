//uncompress

// const uncompress = (s) => {
// 	const result = [];
// 	let numbers = '0123456789';
// 	let i = 0;
// // 	let j = 0;

// // 	while (j < s.length) {
// // 		if (numbers.includes(s[j])) {
// // 			j++;
// // 		} else {
// // 			const num = s.slice(i, j);
// // 			for (let count = 0; count < num; count++) {
// // 				result.push(s[j]);
// // 			}
// // 			j += 1;
// // 			i = j;
// // 		}
// // 	}
// // 	return result.join('');
// // };

// // console.log(uncompress('2c3a1t')); // -> 'ccaaat'

// // const compress = (string) => {
// // 	let result = [];
// // 	let i = 0;
// // 	let j = 0;
// // 	while (j <= string.length) {
// // 		if (string[i] === string[j]) {
// // 			j++;
// // 		} else {
// // 			let num = j - i;
// // 			if (num === 1) {
// // 				result.push(string[i]);
// // 			} else {
// // 				result.push(num, string[i]);
// // 			}
// // 			i = j;
// // 		}
// // 	}
// // 	return result.join('');
// // };

// // console.log(compress('ccaaatsss')); // -> '2c3at3s'

// const anagrams = (s1, s2) => {
// 	const count = {};

// 	for (let char of s1) {
// 		if (!(char in count)) {
// 			count[char] = 0;
// 		}
// 		count[char]++;
// 	}

// 	for (let char of s2) {
// 		if (char in count) {
// 			count[char] -= 1;
// 		} else {
// 			return false;
// 		}
// 	}

// 	for (let char in count) {
// 		if (count[char] !== 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// //Turn into hash map

// let str = 'panchopie';
// let arr = ['k', 'i', 't', 't', 'y'];
// let num = 12345;

// const hashme = (thing) => {
// 	let count = {};
// 	for (let char of thing) {
// 		if (!(char in count)) {
// 			count[char] = 0;
// 		}
// 		count[char]++;
// 	}
// 	return count;
// };

// console.log(hashme(str));
// console.log(hashme(arr));

// // “Write a function to return an n element in Fibonacci sequence” is one of the most common questions you can hear during the coding challenge interview part. In this blogpost I’m going to walk through the two of the most typical solutions for this problem and also cover a dreadful (for most of novice developers) topic of time complexity.

// const fibonacci = (n) => {
// 	if (n < 2) {
// 		return n;
// // 	}
// // 	return fibonacci(n - 1) + fibonacci(n - 2);
// // };

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// // c.right = f;
// // const treeSum = (root) => {
// // 	if (root === null) return 0;
// // 	let stack = [root];
// // 	let result = 0;
// // 	while (stack.length > 0) {
// // 		let current = stack.pop();
// // 		result += current.val;

// // 		if (current.left) stack.push(current.left);
// // 		if (current.right) stack.push(current.right);
// // 	}
// // 	return result;
// // };

// // console.log(treeSum(a));

// var pivotIndex = function (nums) {
// 	let frontPointer = 0;
// 	let backPointer = nums.length;
// 	let frontSum = nums[0]; //1
// 	let backSum = nums[nums.length - 1]; //6
// 	while (frontSum !== backSum) {
// 		if (frontSum > backSum) {
// 			backPointer--;
// 			backSum += nums[backPointer];
// 		} else if (frontSum < backSum) {
// 			frontPointer++;
// 			frontSum += nums[frontPointer];
// 		} else {
// 			break;
// 		}
// 	}

// 	if (frontPointer === 0) {
// 		return 0;
// 	} else if (backPointer - 1 !== frontPointer) {
// 		return -1;
// 	} else {
// 		return frontPointer++;
// 	}
// };

// // Input: nums = [1, 7, 3, 6, 5, 6];
// // Output: 3;
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));

// function findMultiples(integer, limit) {
// 	let results = [];
// 	let i = integer;
// 	while (i <= limit) {
// 		results.push(i);
// 		i = i + integer;
// 	}
// 	return results;
// }
// console.log((findMultiples(5, 25), [5, 10, 15, 20, 25]));
// //
// // test

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// // const linkedListValues = (head) => {
// // 	let current = head;
// // 	let results = [];
// // 	while (current !== null) {
// // 		results.push(current.val);
// // 		current = current.next;
// // 	}
// // 	return results;
// // };

// // Recursive

// const linkedListValues = (head) => {
// 	let values = [];
// 	fillValues(head, values);
// 	return values;
// };
// const fillValues = (head, values) => {
// 	if (head === null) return;
// 	values.push(head.val);
// 	fillValues(head.next, values);
// };

// console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// // 2 -> 8 -> 3 -> -1 -> 7

// // const sumList = (head) => {
// // 	let sum = 0;
// // 	let current = head;
// // 	while (current !== null) {
// // 		sum += current.val;
// // 		current = current.next;
// // 	}
// // 	return sum;
// // };

// const sumList = (head) => {
// 	if (head === null) return 0;
// 	return head.val + sumList(head.next);
// };

// console.log(sumList(a)); // 19

// // Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

// // test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// // const linkedListFind = (head, target) => {
// // 	let cur = head;
// // 	while (cur !== null) {
// // 		if (cur.val === target) {
// // 			return true;
// // 		}
// // 		cur = cur.next;
// // 	}
// // 	return false;
// // };

// const linkedListFind = (head, target) => {
// 	if (head === null) return false;
// 	if (head.val === target) return true;

// 	return linkedListFind(head.next, target);
// };

// // console.log(linkedListFind(a, 'c')); // true

// // Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// // If there is no node at the given index, then return null.

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// // const getNodeValue = (head, index) => {
// // 	let current = head;
// // 	let count = 0;
// // 	while (current !== null) {
// // 		if (count === index) {
// // 			return current.val;
// // 		}
// // 		count++;
// // 		current = current.next;
// // 	}
// // 	return null;
// // };

// const getNodeValue = (head, index) => {
// 	if (head === null) return null;
// 	if (index === 0) return head.val;

// 	index--;
// 	return getNodeValue(head.next, index);
// };
// console.log(getNodeValue(a, 2)); // 'c'

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

// const reverseList = (head) => {
// 	let current = head;
// 	let prev = null;

// 	while (current !== null) {
// 		let next = current.next;
// 		current.next = prev;
// 		prev = current;
// 		current = next;
// 	}
// 	return prev;
// };

//recursive
const reverseList = (head, prev = null) => {
	if (head === null) return prev;
	const next = head.next;
	head.next = prev;
	return reverseList(next, head);
};
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

var middleNode = function (head) {
	let current = head;
	let count = 0;
	while (current !== null) {
		count++;
		current = current.next;
	}
	let target = Math.ceil(count / 2);
	current = head;
	while (current !== null) {
		if (count === target) {
			return current;
		}
		count--;
		current = current.next;
	}
	return null;
};
