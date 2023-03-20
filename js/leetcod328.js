console.log('Leetcode test');
// 3/20

// Medium
// Oddd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/

//Details
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

//PREP
//PARAMETER: What can you take in?
// Head of a linked list

//RETURNS: How? print to console? Return?
// Return the head of a linked list

//EXAMPLES: Examples of how the code should work?
//Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution

//  * Definition for singly-linked list.
var oddEvenList = function (head) {
	// Handle base cases
	if (!head || !head.next || !head.next.next) {
		return head;
	}

	// Set two pointers
	let cur = head;
	let next = head.next;

	// Set the odd.next to point to the next even node
	// Move each pointer up one node on each iteration
	while (next && next.next) {
		const temp = next.next;
		const temp2 = cur.next;

		cur.next = temp;
		next.next = temp.next;
		temp.next = temp2;

		cur = cur.next;
		next = next.next;
	}

	return head;
};
// Test Cases
// head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
