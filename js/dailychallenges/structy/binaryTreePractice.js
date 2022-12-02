console.log('btree');
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
console.log('Node Class enabled');

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
// // // 	if (root === null) return [];

// // //     const leftVals = depthFirstValues(root.left);
// // // 	const rightVals = depthFirstValues(root.right);
// // // 	return [root.val, ...leftVals, ...rightVals]

// // // };

// // console.log(breadthFirstValues(a));

// //Tree sum

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

// // const treeSum = (root) => {
// // 	if (root === null) return 0;
// // 	const stack = [root];
// // 	let sum = 0;
// // 	while (stack.length > 0) {
// // 		const current = stack.pop();
// // 		sum += current.val;

// // 		if (current.right) stack.push(current.right);
// // 		if (current.left) stack.push(current.left);
// // 	}
// // 	return sum;
// // };

// const treeSum = (root) => {
// 	if (root === null) return 0;

// 	return root.val + treeSum(root.left) + treeSum(root.right);
// };

// console.log(treeSum(a)); // -> 21

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

// // const treeIncludes = (root, target) => {
// //     if (root === null) return false
// //     const queue = [ root ]

// //     while (queue.length > 0) {
// //         const current = queue.shift()
// //         if (current.val === target) {
// //             return true
// //         }
// //         if (current.left) queue.push(current.left)
// //         if (current.right) queue.push(current.right)

// //     }
// //     return false
// //   };

// const treeIncludes = (root, target) => {
// 	if (root === null) return false;
// 	if (root.val === target) return true;
// 	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// console.log(treeIncludes(a, 'c')); // -> true

//tree min value

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

// // const treeMinValue = (root) => {
// // 	if (root === null) return null;
// // 	let min = root.val;
// //     const queue = [root];
// // 	while (queue.length > 0) {
// // 		let current = queue.shift();
// // 		if (current.val < min) {
// // 			console.l;
// // 			min = current.val;
// // 		}
// // 		if (current.left) queue.push(current.left);
// // 		if (current.right) queue.push(current.right);
// // 	}
// // 	return min;
// // };

// const treeMinValue = (root) => {
// 	if (root === null) return Number.MAX_VALUE;
// 	const leftVals = treeMinValue(root.left);
// 	const rightVals = treeMinValue(root.right);
// 	return Math.min(root.val, leftVals, rightVals);
// };

// console.log(treeMinValue(a)); // -> -2
// // test_01:
// // const a = new Node(5);
// // const b = new Node(11);
// // const c = new Node(3);
// // const d = new Node(4);
// // const e = new Node(14);
// // const f = new Node(12);

// // a.left = b;
// // a.right = c;
// // b.left = d;
// // b.right = e;
// // // c.right = f;

// // // //       5
// // // //    /    \
// // // //   11     3
// // // //  / \      \
// // // // 4   14     12

// // // treeMinValue(a); // -> 3

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
// 	return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
// // };

// // console.log(maxPathSum(a)); // -> 18

// //Pathfinder

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

// const pathFinder = (root, target) => {
//     if (root === null) return null
//     if (root.val === target) return [ root.val ]

//     const leftPath = pathFinder(root.left, target)
//     const rightPath = pathFinder(root.right, target)

//     if (leftPath !== null ) {
//        leftPath.push(root.val)
//       return leftPath
//     }

//     if (rightPath !== null) {
//        rightPath.push(root.val)
//        return rightPath
//     }
//     return null

// };

// console.log(pathFinder(a, 'e')); //

// //    A
// //   / \

// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// const treeValueCount = (root, target) => {
// 	if (root === null) return 0;
// 	let stack = [root];
// 	let count = 0;

// 	while (stack.length > 0) {
// 		const current = stack.pop();
// 		if (current.val === target) {
// 			count++;
// 		}
// 		if (current.left) stack.push(current.left);
// 		if (current.right) stack.push(current.right);
// 	}
// 	return count;
// };

// const treeValueCount = (root, target) => {
// 	if (root === null) return 0;
// 	const match = root.val === target ? 1 : 0;
// 	return (
// 		match +
// 		treeValueCount(root.left, target) +
// 		treeValueCount(root.right, target)
// 	);
// };

// console.log(treeValueCount(a, 6)); // -> 3

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
// 	if (node === null) return 1;

// 	return 1 + Math.max(howHigh(node.left), howHigh(node.right));
// };

// console.log(howHigh(a)); // -> 2
// bottom right value
// Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.

// test_00:
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

// const bottomRightValue = (root) => {
// 	if (root === null) return null;
// 	const queue = [root];
// 	let current = null;
// 	while (queue.length > 0) {
// 		current = queue.shift();

// 		if (current.left) queue.push(current.left);
// 		if (current.right) queue.push(current.right);
// 	}
// 	return current.val;
// };
// bottomRightValue(a); // -> 1
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
// d   e
// const allTreePaths = (root) => {
// 	if (root === null) return null;
// 	const stack = [root];
// 	let currentPath = [];
// 	const path = [];
// 	while (stack.length > 0) {
// 		const current = stack.pop();
// 		currentPath.push(current.val);

// 		if (current.right) stack.push(current.right);
// 		if (current.left) stack.push(current.left);
// 		if (current.right === null && current.left === null) {
// 			path.push(currentPath);
// 			currentPath = [];
// 		}
// 	}
// 	return path;
// };

const allTreePaths = (root) => {
	if (root === null) return [];
	if (root.left === null && root.right === null) return [[root.val]];
	return root.push(allTreePaths(root.left) + allTreePaths(root.right));
};
console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
// Test1
//
//
//
//
//
