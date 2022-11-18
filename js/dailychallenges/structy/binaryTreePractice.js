console.log('btree');
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
console.log('Node Class enabled');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

//Depth first traversal
// const depthFirstValues = (root) => {
// 	if (root === null) return [];
// 	const results = [];
// 	const stack = [root];
// 	while (stack.length > 0) {
// 		const current = stack.pop();
// 		results.push(current.val);

// 		if (current.right) stack.push(current.right);
// 		if (current.left) stack.push(current.left);
// 	}
// 	return results;
// };

// const depthFirstValues = (root) => {
// 	if (root === null) return [];

// 	const leftVals = depthFirstValues(root.left);
// 	const rightVals = depthFirstValues(root.right);
// 	return [root.val, ...leftVals, ...rightVals];
// };

//    -> ['a', 'b', 'd', 'e', 'c', 'f']

// Breadth first Traversal

// const breadthFirstValues = (root) => {
// 	if (root === null) return [];
// 	const results = [];
// 	const queue = [root];
// 	while (queue.length > 0) {
// 		const current = queue.shift();
// 		results.push(current.val);

// 		if (current.left) queue.push(current.left);
// 		if (current.right) queue.push(current.right);
// 	}
// 	return results;
// };

// // const breadthFirstValues = (root) => {
// // 	if (root === null) return [];

// //     const leftVals = depthFirstValues(root.left);
// // 	const rightVals = depthFirstValues(root.right);
// // 	return [root.val, ...leftVals, ...rightVals]

// // };

// console.log(breadthFirstValues(a));
