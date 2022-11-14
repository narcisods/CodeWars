console.log('linked');

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

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

const linkedListValues = (head) => {
	const values = [];
	getsVal(head, values);
	return values;
};

const getsVal = (head, values) => {
	if (head === null) return;
	values.push(head.val);
	getsVal(head.next, values);
};
console.log(linkedListValues(a));

//Sum List
