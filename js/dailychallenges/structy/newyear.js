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

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

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
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

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
// const reverseList = (head, prev = null) => {
// 	if (head === null) return prev;
// 	const next = head.next;
// 	head.next = prev;
// 	return reverseList(next, head);
// };
// console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

// var middleNode = function (head) {
// 	let current = head;
// 	let count = 0;
// 	while (current !== null) {
// 		count++;
// 		current = current.next;
// 	}
// 	let target = Math.ceil(count / 2);
// 	current = head;
// 	while (current !== null) {
// 		if (count === target) {
// 			return current;
// 		}
// 		count--;
// 		current = current.next;
// 	}
// 	return null;
// };

//Hashmap practice

// const array = [2, 3, 4, 1, 3, 4, 42, 3, 4, 1, 2, 3, 3, 3, 3, 4, 1, 12, 3];

// const hash = (arr) => {
// 	const count = {};
// 	for (let char of arr) {
// 		if (!(char in count)) {
// 			count[char] = 0;
// 		}
// 		count[char]++;
// 	}
// 	return count;
// };

// console.log(hash(array));

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // const reverseList = (head) => {
// // 	let current = head;
// // 	let prev = null;
// // 	while (current !== null) {
// // 		let next = current.next;
// // 		current.next = prev;
// // 		prev = current;
// // 		current = next;
// // 	}
// // 	return prev;
// // };

// const reverseList = (head, prev = null) => {
// 	if (head === null) return prev;
// 	const next = head.next;
// 	head.next = prev;
// 	return reverseList(next, head);
// };

// // a -> b -> c -> d -> e -> f

// // console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// a.next = b;
// b.next = c;
// // a -> b -> c

// const x = new Node('x');
// const y = new Node('y');
// const z = new Node('z');
// x.next = y;
// y.next = z;
// // x -> y -> z

// const zipperLists = (head1, head2) => {
// 	let current1 = head1.next;
// 	let current2 = head2;
// 	let tail = head1;
// 	let count = 0;
// 	while (current1 !== null && current2 !== null) {
// 		if (count % 2 === 0) {
// 			tail.next = current2;
// 			current2 = current2.next;
// 		}
// 		if (count % 2 !== 0) {
// 			tail.next = current1;
// 			current1 = current1.next;
// 		}
// 		count++;
// 		tail = tail.next;
// 	}
// 	if (current1 === null) tail.next = current2;

// 	if (current2 === null) tail.next = current1;

// 	return head1;
// };

// console.log(zipperLists(a, x));
// // a -> x -> b -> y -> c -> z

// merge lists
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// // test_00:
// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(25);
// q.next = r;
// r.next = s;
// s.next = t;
// // 6 -> 8 -> 9 -> 25

// // const mergeLists = (head1, head2) => {
// // 	let current1 = head1;
// // 	let current2 = head2;
// // 	const dummy = new Node(null);
// // 	let tail = dummy;
// // 	while (current1 !== null && current2 !== null) {
// // 		if (current1.val < current2.val) {
// // 			tail.next = current1;
// // 			current1 = current1.next;
// // 		} else {
// // 			tail.next = current2;
// // 			current2 = current2.next;
// // 		}
// // 		tail = tail.next;
// // 	}

// // 	if (current1 === null) tail.next = current2;
// // 	if (current2 === null) tail.next = current1;

// // 	return dummy.next;
// // };
// const mergeLists = (head1, head2) => {
// 	if (head1 === null && head2 === null) return null;
// 	if (head1 === null) return head2;
// 	if (head2 === null) return head1;

// 	if (head1.val < head2.val) {
// 		const next1 = head1.next;
// 		head1.next = mergeLists(next1, head2);
// 		return head1;
// 	} else {
// 		const next2 = head2.next;
// 		head2.next = mergeLists(head1, next2);
// 		return head2;
// 	}
// };
// console.log(mergeLists(a, q));
// // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
// test_01:
// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(1);
// const r = new Node(8);
// const s = new Node(9);
// // const t = new Node(10);
// // q.next = r;
// // r.next = s;
// // s.next = t;
// // // 1 -> 8 -> 9 -> 10

// // mergeLists(a, q);
// // // 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 7

// // const isUnivalueList = (head) => {
// // 	let current = head;

// // 	while (current !== null) {
// // 		if (current.val !== head.val) {
// // 			return false;
// // 		}
// // 		current = current.next;
// // 	}
// // 	return true;
// // };

// // console.log(isUnivalueList(a)); // true

// const a = new Node(5);
// const b = new Node(5);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(7);
// const f = new Node(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// const longestStreak = (head) => {
// 	let current = head;
// 	let currentStreak = 0;
// 	let maxStreak = 0;
// 	let prevVal = null;
// 	while (current !== null) {
// 		if (prevVal === current.val) {
// 			currentStreak++;
// 		} else {
// 			currentStreak = 1;
// 		}
// 		if (currentStreak > maxStreak) maxStreak = currentStreak;
// 		prevVal = current.val;
// 		current = current.next;
// 	}
// 	return maxStreak;
// };
// // 5 -> 5 -> 7 -> 7 -> 7 -> 6

// console.log(longestStreak(a)); // 3

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // a -> b -> c -> d -> e -> f
// const removeNode = (head, target) => {
// 	let current = head;
// 	let dummyHead = new Node(null);
// 	let prev = dummyHead;

// 	while (current !== null) {
// 		if (current.val === target) {
// 			let next = current.next;
// 			current.next = null;
// 			prev.next = next;
// 			break
// 		}
// 		prev = current;
// 		current = current.next;
// 	}
// 	return head;
// };

// removeNode(a, 'c');
// // // a -> b -> d -> e -> f

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// const insertNode = (head, value, index) => {
// 	if (index === 0) {
// 		let newNode = new Node(value);
// 		newNode.next = head;
// 		return newNode;
// 	}
// 	let current = head;
// 	let count = 0;
// 	while (current !== null) {
// 		if (count === index -1) {
// 			let next = current.next;
// 			current.next = new Node(value);
// 			current.next.next = next;
// 			break;
// 		}

// 		count++;
// 		current = current.next;
// 	}
// 	return head;
// };

// console.log(insertNode(a, 'x', 2));
// // a -> b -> x -> c -> d

// // Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// // test_00:

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

// const createLinkedList = (values) => {
// 	let dummyHead = new Node(null);
// 	let tail = dummyHead;
// 	for (let val of values) {
// 		tail.next = new Node(val);
// 		tail = tail.next;
// 	}

// 	return dummyHead.next;
// };

// console.log(createLinkedList(['h', 'e', 'y']));
// // h -> e -> y

// addList

// test_00:
//   621
// + 354
// -----
//   975

//  7541
// +  32
// -----
//  7573
//   89
// + 47
// ----
//  136

// const a1 = new Node(9);
// const a2 = new Node(8);
// a1.next = a2;
// // 9 -> 8

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// // 7 -> 4

// const addLists = (head1, head2, carry = 0) => {
// 	if (head1 === null && head2 === null && carry === 0) return null;

// 	const val1 = head1 === null ? 0 : head1.val;
// 	const val2 = head2 === null ? 0 : head2.val;

// 	const sum = val1 + val2 + carry;
// 	const nextCarry = sum > 9 ? 1 : 0;
// 	const digit = sum % 10;
// 	const resultsNode = new Node(digit);

// 	const next1 = head1 === null ? null : head1.next;
// 	const next2 = head2 === null ? null : head2.next;
// 	resultsNode.next = addLists(next1, next2, nextCarry);
// 	return resultsNode;
// };

// console.log(addLists(a1, b1));
// // 5 -> 7 -> 9

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
// const depthFirstValues = (root) => {
// 	if (root === null) return []
// 	const stack = [root];
// 	const values = [];
// 	while (stack.length > 0) {
// 		const current = stack.pop();
// 		values.push(current.val);

// 		if (current.right) stack.push(current.right);
// 		if (current.left) stack.push(current.left);
// 	}
// 	return values;
// };

// const depthFirstValues = (root) => {
// 	if (root === null) return [];
// 	const leftVals = depthFirstValues(root.left);
// 	const rightVals = depthFirstValues(root.right);
// 	return [root.val, ...leftVals, ...rightVals];
// };
// // console.log(depthFirstValues(a));
// // //    -> ['a', 'b', 'd', 'e', 'c', 'f']
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
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// const treeIncludes = (root, target) => {
//     if (root === null) return false
//     const stack = [ root ]
//     while (stack.length > 0) {
//       const current = stack.pop()
//       if (current.val === target) return true

//       if (current.left) stack.push(current.left)
//       if (current.right) stack.push(current.right)

//     }
//     return false
//   };

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
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// const maxPathSum = (root) => {
// 	if (root === null) return -Infinity;
// 	if (root.left === null && root.right === null) return root.val;
// 	const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));

// 	return root.val + maxChild;
// };

// console.log(maxPathSum(a)); // -> 18
// // Reverse Linked List

// const reverse = (root) => {
// 	let current = root;
// 	let prev = null;
// // 	while (current !== null) {
// // 		let next = current.next;
// // 		current.next = prev;
// // 		prev = current;
// // 		current = next;
// // 	}
// // // 	return prev;
// // // };

// // const hashMap = (string) => {
// // 	let count = {};
// // 	for (const char of string) {
// // 		if (!(char in count)) {
// // 			count[char] = 0;
// // 		}
// // 		count[char]++;
// // 	}
// // 	return count;
// // };

// // console.log(hashMap('testtesttest'));

// //Beiatrix BST

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// class BST {
// 	constructor(value) {
// 		this.root = new Node(value);
// 		this.count = 1;
// 	}

// 	size() {
// 		return this.count;
// 	}
// 	insert(value) {
// 		this.count++;
// 		let newNode = new Node(value);

// 		const searchTree = (node) => {
// 			// if value < node.value, go left
// 			if (value < node.value) {
// 				if (!node.left) {
// 					node.left = newNode;
// 				} else {
// 					searchTree(node.left);
// 				}
// 			}
// 			// if value > node.value, go right
// 			else if (value > node.value) {
// 				if (!node.right) {
// 					node.right = newNode;
// 				} else {
// 					searchTree(node.right);
// 				}
// 			}
// 		};
// 		searchTree(this.root);
// 	}
// 	min() {
// 		let currentNode = this.root;

// 		while (currentNode.left) {
// 			currentNode = currentNode.left;
// 		}
// 		return currentNode.value;
// 	}
// 	max() {
// 		let currentNode = this.root;

// 		while (currentNode.right) {
// 			currentNode = currentNode.right;
// 		}
// 		return currentNode.value;
// 	}
// 	contains(value) {
// 		let currentNode = this.root;
// 		while (currentNode) {
// 			if (value === currentNode.value) {
// 				return true;
// 			}
// 			if (value < currentNode.value) {
// 				currentNode = currentNode.left;
// 			} else {
// 				currentNode = currentNode.right;
// 			}
// 		}
// 		return false;
// 	}
// 	//depth first search

// 	// in-order
// 	dfsInOrder() {
// 		let result = [];

// 		const traverse = (node) => {
// 			// if left child exsist, go left again
// 			if (node.left) traverse(node.left);
// 			// capture root node value
// 			result.push(node.value);
// 			// if right child exists, go right again
// 			if (node.right) traverse(node.right);
// 		};

// 		traverse(this.root);
// 		return result;
// 	}

// 	//pre-order
// 	dfsPreOrder() {
// 		let result = [];

// 		const traverse = (node) => {
// 			// capture root node value
// 			result.push(node.value);
// 			// if left child exsist, go left again
// 			if (node.left) traverse(node.left);
// 			// if right child exists, go right again
// 			if (node.right) traverse(node.right);
// 		};
// 		traverse(this.root);
// 		return result;
// 	}

// 	//post-order
// 	dfsPostOrder() {
// 		let result = [];

// 		const traverse = (node) => {
// 			// if left child exsist, go left again
// 			if (node.left) traverse(node.left);
// 			// if right child exists, go right again
// 			if (node.right) traverse(node.right);
// 			// capture root node value
// 			result.push(node.value);
// 		};
// 		traverse(this.root);
// 		return result;
// 	}

// 	// breadth first search
// 	bfs() {
// 		let result = [];
// 		let queue = [this.root];

// 		while (queue.length > 0) {
// 			let current = queue.shift();
// 			result.push(current.value);
// 			if (current.left) queue.push(current.left);
// 			if (current.right) queue.push(current.right);
// 		}

// 		return result;
// 	}
// }

// const bst = new BST(15);

// bst.insert(3);
// bst.insert(36);
// bst.insert(2);
// bst.insert(12);
// bst.insert(28);
// bst.insert(39);

// console.log(bst);
// console.log(bst.size());
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.contains(9));
// console.log(bst.dfsInOrder());
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());
// console.log(bst.bfs());

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// const howHigh = (node) => {
// 	if (node === null) return -1;

// 	const leftTreeHeight = howHigh(node.left);
// 	const rightTreeHeight = howHigh(node.right);
// 	return 1 + Math.max(leftTreeHeight, rightTreeHeight);
// };

// console.log(howHigh(a)); // -> 2

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// const allTreePaths = (root) => {
// 	if (root === null) return [];
// 	if (root.left === null && root.right === null) return [[root.val]];

// 	const paths = [];
// 	const leftSubPaths = allTreePaths(root.left);
// 	for (let subPath of leftSubPaths) {
// 		paths.push([root.val, ...subPath]);
// 	}

// 	const rightSubPaths = allTreePaths(root.right);
// 	for (let subPath of rightSubPaths) {
// 		paths.push([root.val, ...subPath]);
// 	}

// 	return paths;
// };
// console.log(allTreePaths(a)); // ->
// // [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
// const treeLevels = (root) => {
// 	if (root === null) return [];

// 	const stack = [{ node: root, levelNum: 0 }];

// 	let levels = [];

// 	while (stack.length > 0) {
// 		const { node, levelNum } = stack.pop();

// 		if (levels.length === levelNum) {
// 			levels.push([node.val]);
// 		} else {
// 			levels[levelNum].push(node.val);
// 		}
// 		if (node.right !== null)
// 			stack.push({ node: node.right, levelNum: levelNum + 1 });
// 		if (node.left !== null)
// 			stack.push({ node: node.left, levelNum: levelNum + 1 });
// 	}
// 	return levels;
// };

// const treeLevels = (root) => {
// 	if (root === null) return [];
// 	const stack = [{ node: root, levelNum: 0 }];
// 	const levels = []
// 	while (stack.length) {
// 		const { node, levelNum } = stack.pop();
// 		if (levelNum === levels.length) {
// 			levels.push([node.val])
// 		} else {
// 			levels[levelNum].push(node.val)
// 		}

// 		if (!node.right) stack.push({ node: node.right, levelNum: levelNum + 1 });
// 		if (!node.left) stack.push({ node: node.left, levelNum: levelNum + 1 });

// // 	}
// // 	return levels;
// // };
// const treeLevels = (root) => {
// 	const levels = [];
// 	fillLevels(root, levels, 0);

// // 	return levels;
// };

// const fillLevels = (root, levels, levelNum) => {
// 	if (root === null) return;

// 	if (levelNum === levels.length) {
// 		levels.push([node.val]);
// 	} else {
// 		levels[levelNum].push(node.val);
// 	}

// 	fillLevels(root.left, levels, levelNum + 1);
// 	fillLevels(root.right, levels, levelNum + 1);
// };

// console.log(treeLevels(a)); // ->
// // [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

// // test_00:
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
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// const levelAverages = (root) => {
// 	const levels = [];
// 	//call helper function to fill levels array
// 	fillLevels(root, levels, 0);
// 	//take levels array and average each array using .map
// 	return levels.map((subArray) => {
// 		return subArray.reduce((acc, c) => acc + c, 0) / subArray.length;
// 	});
// };
// const fillLevels = (root, levels, currLevel) => {
// 	if (root === null) return;
// 	//Logic to fill each level correctly
// 	if (levels.length === currLevel) {
// 		levels.push([root.val]);
// 	} else {
// 		levels[currLevel].push(root.val);
// 	}
// 	//recursive
// 	fillLevels(root.left, levels, currLevel + 1);
// 	fillLevels(root.right, levels, currLevel + 1);
// };

// // console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
// // Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

// // test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// const leafList = (root) => {
// 	if (root === null) return [];
// 	const stack = [root];
// 	const result = [];

// 	while (stack.length) {
// 		const current = stack.pop();
// 		console.log(current.val);
// 		if (!current.right && !current.left) result.push(current.val);

// 		if (current.right) stack.push(current.right);
// 		if (current.left) stack.push(current.left);
// 	}

// 	return result;
// };

// console.log(leafList(a)); // -> [ 'd', 'e', 'f' ]

const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: [],
};

// const hasPath = (graph, src, dst) => {
// 	const stack = [src];

// 	while (stack.length) {
// 		const current = stack.pop();

// 		for (let neighbor of graph[current]) {
// 			if (neighbor === dst) {
// 				return true;
// 				break;
// 			}
// 			stack.push(neighbor);
// 		}
// 	}
// 	return false;
// };

const hasPath = (graph, src, dst) => {
	if (src === dst) return true;
	console.log(src);
	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst) === true) {
			return true;
		}
	}
	return false;
};

console.log(hasPath(graph, 'f', 'k')); // true
