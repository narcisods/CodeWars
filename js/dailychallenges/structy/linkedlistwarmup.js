console.log('linked');

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// A -> B -> C -> D -> Null

// const printLinkedList = (head) => {
// 	let current = head;
// 	while (current !== null) {
// 		console.log(current.val);
// 		current = current.next;
// 	}
// };

// const printLinkedList = (head) => {
// 	if (head === null) return;
// 	console.log(head.val);
// 	printLinkedList(head.next);
// };
// printLinkedList(a);

// const linkedListValues = (head) => {
// 	const results = [];
// 	let current = head;
// 	while (current !== null) {
// 		results.push(current.val);
// 		current = current.next;
// 	}
// 	return results;
// };

// const linkedListValues = (head) => {
// 	const values = [];
// 	getsVal(head, values);
// 	return values;
// };

// const getsVal = (head, values) => {
// 	if (head === null) return;
// 	values.push(head.val);
// 	getsVal(head.next, values);
// };
// console.log(linkedListValues(a));

//Sum List

// const sumList = (head) => {
// 	let sum = 0;
// 	getVals(head, sum);
// 	return sum;
// };

// const sumList = (head, sum) => {
// 	if (head === null) return 0;
// 	return head.val + sumList(head.next);
// };

// // const sumList = (head) => {
// // 	let sum = 0;
// // 	let current = head;
// // // 	while (current !== null) {
// // // 		sum = sum + current.val;
// // // 		current = current.next;
// // // 	}
// // // 	return sum;
// // // // };

// // // console.log(sumList(a));

// // //Linked list find

// // const a = new Node('a');
// // const b = new Node('b');
// // const c = new Node('c');
// // const d = new Node('d');

// // a.next = b;
// // b.next = c;
// // c.next = d;

// // // const linkedListFind = (head, target) => {
// // // 	let current = head;
// // // 	while (current !== null) {
// // // 		if (current.val === target) {
// // // 			return true;
// // // 		}
// // // 		current = current.next;
// // // 	}
// // // 	return false;
// // // };

// // //recursive

// // const linkedListFind = (head, target) => {
// // 	if (head === null) return false;
// // 	if (head.val === target) return true;
// // 	return linkedListFind(head.next, target);
// // };

// // console.log(linkedListFind(a, 'a'));

// //Get Node Value

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // const getNodeValue = (head, index) => {
// // 	let current = head;
// // 	let count = 0;
// // 	while (current !== null) {
// // 		if (count === index) return current.val;
// // 		count++;
// // 		current = current.next;
// // 	}
// // 	return null;
// // };

// // const getNodeValue = (head, index) => {
// // 	if (head === null) return null;
// // 	if (index === 0) return head.val;
// // 	index--;
// // 	return getNodeValue(head.next, index);
// // };

// console.log(getNodeValue(a, 2)); // 'c'

// Reverse List
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

// const reverseList = (head) => {
// 	let current = head;
// 	let prev = null;

// 	while (current !== null) {
// 		const next = current.next;
// 		current.next = prev;
// 		prev = current;
// 		current = next;
// 	}
// 	return prev;
// };

// const reverseList = (head, prev = null) => {
// 	if (head === null) return prev;
// 	const next = head.next;
// 	head.next = prev;

// // 	return reverseList(next, head);
// // };
// // // A -> B -> C -> D -> E -> F

// // console.log(reverseList(a));

// //zipper

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

// // const zipperLists = (head1, head2) => {
// // 	let current1 = head1.next;
// // 	let current2 = head2;
// // 	let tail = head1;
// // 	let count = 0;
// // 	while (current1 !== null && current2 !== null) {
// // 		if (count % 2 === 0) {
// // 			count++;
// // 			let next = tail.next;
// // 			tail.next = current2;
// // 			tail = next;
// // 			current2 = current2.next;
// // 		} else {
// // 			if (count % 2 !== 0) {
// // 				count++;
// // 				let next = tail.next;
// // 				tail.next = current1;
// // 				tail = next;
// // 				current1 = current1.next;
// // 			}
// // 		}
// // 		if (current1 !== null) {
// // 			let next = tail.next;
// // 			tail.next = current1;
// // 			tail = next;
// // 		} else {
// // 			let next = tail.next;
// // 			tail.next = current2;
// // 			tail = next;
// // 		}
// // 	}
// // 	return tail;
// // };

// // const zipperLists = (head1, head2) => {
// // 	let current1 = head1.next;
// // 	let current2 = head2;
// // 	let tail = head1;
// // 	let count = 0;

// // 	while (current1 !== null && current2 !== null) {
// // 		if (count % 2 === 0) {
// // 			tail.next = current2;
// // 			current2 = current2.next;
// // 		} else {
// // 			tail.next = current1;
// // 			current1 = current1.next;
// // 		}
// // 		tail = tail.next;
// // 		count++;
// // 	}
// // 	if (current1 !== null) tail.next = current1;
// // 	if (current2 !== null) tail.next = current2;

// // 	return head1;
// // };

// // const zipperLists = (head1, head2) => {
// // 	if (head1 === null && head2 === null) return null;
// // 	if (head1 === null) return head2;
// // 	if (head2 === null) return head1;

// // 	const next1 = head1.next;
// // 	const next2 = head2.next;
// // 	head1.next = head2;
// // 	head2.next = zipperLists(next1, next2);
// // 	return head1;
// // };

// // const zipperLists = (head1, head2) => {
// // 	let current1 = head1.next;
// // 	let current2 = head2;
// // 	let tail = head1;
// // 	let count = 0;

// // 	while (current1 !== null && current2 !== null) {
// // 		if (count % 2 === 0) {
// // 			tail.next = current2;
// // 			current2 = current2.next;
// // 		} else {
// // 			tail.next = current1;
// // 			current1 = current1.next;
// // 		}
// // 		count++;
// // 		tail = tail.next;
// // 	}

// // 	if (current1 === null) tail.next = current2
// // 	if (current2 === null) tail.next = current1

// // 	return head1;
// // };

// const zipperLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null
//     if (head1 === null) return head2
//     if (head2 === null) return head1

//     const next1 = head1.next
// //     const next2 = head2.next
// //     head1.next = head2;
// //     head2.next = zipperLists(next1, next2);

// //     return head1
// // };
// // console.log(zipperLists(a, x));

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
// const t = new Node(10);
// q.next = r;
// r.next = s;
// s.next = t;
// // 6 -> 8 -> 9 -> 25

// const mergeLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null
//     if (head1 === null) return head2
//     if (head2 === null) return head1

//     if (head1.val < head2.val) {
//         const next1 = head1.next
//         head1.next = mergeLists(next1,head2)
//         return head1
//     } else {
//         const next2 = head2.next
//         head2.next = mergeLists(head1,next2)
//         return head2
//     }
// };

// // Current 1
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28
// // Current 2
// // 6 -> 8 -> 9 -> 25

// console.log(mergeLists(a, q));
// // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28

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

// // 5 -> 5 -> 7 -> 7 -> 7 -> 6

// longestStreak(a); // 3

// const longestStreak = head => {
//     let current = head
//     let longestStreak = 0
//     let currentStreak = 0
//     let streakVal = null
//     while (current !== null) {
//         if(current.val === streakVal) {
//             currentStreak++
//         }else{
//             currentStreak = 0
//             streakVal = current.val
//             currentStreak++
//         }

//         if(currentStreak > longestStreak) {
//             longestStreak = currentStreak
//         }

//         current = current.next
//     }
//     return longestStreak
// }

// //remove node
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

// const removeNode = (head, targetVal) => {
//     if(head.val === targetVal) return head.next

//     let current = head
//     let prev = null
//     while (current !== null) {
//         if (current.val === targetVal) {
//             prev.next = current.next
//             break
//         }

//         prev = current
//         current = current.next
//     }
// return head

// };

// const removeNode = (head, targetVal) => {
// //     if (head === null) return null
// //     if (head.val === targetVal) return head.next
// //     head.next = removeNode(head.next,targetVal)
// //     return head
// // };

// // removeNode(a, 'c');
// // // a -> b -> d -> e -> f

// //insert node

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// // const insertNode = (head, value, index) => {
// // 	let current = head
// //     let count = 0
// //     const x = new Node(value)
// //     if (count === index){
// //         x.next = head
// //         return x
// //     }
// //     while (current !== null) {
// //         if (count === index -1) {
// //             let temp = current.next
// //             current.next = x
// //             x.next = temp
// //             break
// //         }
// //         count++
// //         current = current.next
// //     }
// //     return head
// // };

// const insertNode = (head, value, index, count = 0) => {
// 	if (head === null) return;

// 	if (index === 0) {
// 		const newHead = new Node(value);
// 		newHead.next = head;
// 		return newHead;
// 	}

// 	if (current === index - 1) {
// 		const temp = head.next;
// 		head.next = new Node(value);
// 		head.next.next = temp;
// 		return head;
// 	}

// 	insertNode(head.next, value, index, count + 1);
// 	return head;
// };

// module.exports = {
// 	insertNode,
// };

// insertNode(a, 'x', 2);
// // a -> b -> x -> c -> d

// // // a -> b -> c -> d

// const createLinkedList = (values) => {
// 	if (values.length === 0) return null;

// 	const head = new Node(values[0]);
// 	let current = head;
// 	for (let i = 1; i < values.length; i++) {
// 		current.next = new Node(values[i]);
// 		current = current.next;
// 	}

// 	current.next = null;
// 	return head;
// };

// createLinkedList(['h', 'e', 'y']);

//addlist

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

//621

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

//345
// function one -> listToArray
// go into each link list, extra values, put it into array.

// function two -> reverseArrayToOne
// function that takes in two arrays, reverses it, adds it together, turns it back into an array, then returns that array

//function three -> arrIntoLinkedList
//takes that array that function two returns, turns it into an array
//returns head

// const addLists = (head1, head2) => {
// 	const arr1 = listToArray(head1);
// 	const arr2 = listToArray(head2);
// 	const combinedArray = reverseArrayToOne(arr1, arr2);
// 	return arrIntoLinkedList(combinedArray);
// };

// const listToArray = (head) => {
// 	const result = [];
// 	let current = head;
// 	while (current !== null) {
// 		result.push(current.val);
// 		current = current.next;
// 	}
// 	return result;
// };

// const reverseArrayToOne = (arr1, arr2) => {
// 	const num1 = Number(arr1.reverse().join(''));
// 	const num2 = Number(arr2.reverse().join(''));
// 	const sum = (num1 + num2).toString();
// 	const newArr = sum
// 		.split('')
// 		.reverse()
// 		.map((str) => Number(str));

// 	return newArr;
// };

// const arrIntoLinkedList = (arr) => {
// 	const dummyHead = new Node(null);
// 	let tail = dummyHead;
// 	for (let val of arr) {
// 		tail.next = new Node(val);
// 		tail = tail.next;
// 	}
// 	return dummyHead.next;
// };

// const addLists = (head1, head2) => {
// 	let dummyHead = new Node(null);
// 	let current1 = head1;
// 	let current2 = head2;
// 	let tail = dummyHead;
// 	let carry = 0;
// 	while (current1 !== null || current2 !== null) {
// 		if (current1 === null) {
// 			tail.next = new Node(0 + current2.val);
// 			current2 = current2.next;
// 		} else if (current2 === null) {
// 			tail.next = new Node(current1.val + 0);
// 			current1 = current1.next;
// 		} else {
// 			let sum = 0;
// 			if (carry === 0) {
// 				sum = current1.val + current2.val;
// 			} else {
// 				sum = current1.val + current2.val + carry;
// 				carry--;
// 			}

// 			if (sum >= 10) {
// 				carry++;
// 				sum = sum - 10;
// 			}
// 			tail.next = new Node(sum);
// 			current1 = current1.next;
// 			current2 = current2.next;
// 		}
// 		tail = tail.next;
// 	}
// 	if (carry > 0) {
// 		tail.next = new Node(1);
// 	}
// 	return dummyHead.next;
// };
const addLists = (head1, head2) => {
	let carry = 0;
	let current1 = head1;
	let current2 = head2;
	let dummyHead = new Node(null);
	let tail = dummyHead;
	while (current1 !== null || current2 !== null || carry === 1) {
		const val1 = current1 === null ? 0 : current1.val;
		const val2 = current2 === null ? 0 : current2.val;

		const sum = val1 + val2 + carry;
		carry = sum > 9 ? 1 : 0;
		const digit = sum % 10;

		tail.next = new Node(digit);

		tail = tail.next;
		current1 === null ? null : (current1 = current1.next);
		current2 === null ? null : (current2 = current2.next);
	}
	return dummyHead.next;
};

//recursive
// const addLists = (head1, head2, carry = 0) => {
//     if (head1 === null && head2 === null && carry === 0) return null
//     const val1 = head1 === null ? 0 : head1.val
//     const val2 = head2 === null ? 0 : head2.val

//     const sum = val1 + val2 + carry
//     const nextCarry = sum > 9 ? 1 : 0
//     const digit = sum % 10

//     const resultNode = new Node(digit)

//     const next1 = head1 === null ? null : head1.next
//     const next2 = head1 === null ? null : head2.next

//     resultNode.next = addLists(next1, next2, nextCarry)
//     return resultNode
// };

console.log(addLists(a1, b1));
// 5 -> 7 -> 9

// 975 -> 579 return head of this list
