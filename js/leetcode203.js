console.log('Codewars test');
// 3/20

// Easy
// Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/

//Details

//PREP
//PARAMETER: What can you take in?
//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
var removeElements = function (head, val) {
	if (head === null) return null;

	while (head.val === val) {
		head = head.next;
		if (head === null) {
			return null;
		}
	}

	let current = head;
	let prev = null;
	while (current) {
		if (current.val === val) {
			prev.next = current.next;
		} else {
			prev = current;
		}
		current = current.next;
	}
	return head;
};
// Test Cases

// Codewars Solution
