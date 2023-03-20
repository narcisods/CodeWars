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
	if (!head || !head.next || !head.next.next) return head;

	let even = head;
	//5
	let odd = head.next;
	let oddHead = odd;
	//null

	while (odd && odd.next) {
		//handle even list
		even.next = odd.next;
		even = even.next;

		//handles odd list
		odd.next = even.next;
		odd = even.next;
	}
	//point tail of even list to head of oddlist
	even.next = oddHead;

	return head;
};
// Test Cases
// head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
