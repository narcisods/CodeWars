console.log('Codewars test');
// 3/21

// Medium
// 116. Populating Next Right Pointers in Each Node
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

//Details
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

//PREP
//PARAMETER: What can you take in?
//

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
// Go through each level,
// Track what level im in, point to the next node if I am not in the next level
// Check if I am at the last node of that level, then

// My Solution
var connect = function (root) {
	if (!root) {
		return root;
	}

	let leftmost = root;

	while (leftmost.left) {
		let node = leftmost;

		while (node) {
			node.left.next = node.right;

			if (node.next) {
				node.right.next = node.next.left;
			}

			node = node.next;
		}

		leftmost = leftmost.left;
	}

	return root;
};
