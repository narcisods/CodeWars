console.log('Codewars test');
// Date

// ? Kyu
// Title
// Link

//Details
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Follow up: Could you solve it without reversing the input lists?
//PREP
//PARAMETER: What can you take in?
//

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution

// Test Cases

// Codewars Solution
let current1 = l1;
let current2 = l2;
const stack1 = [];
const stack2 = [];
while (current1 !== null || current2 !== null) {
	if (current1 !== null) {
		stack1.push(current1.val);
		current1 = current1.next;
	}
	if (current2 !== null) {
		stack2.push(current2.val);
		current2 = current2.next;
	}
}

// // Creates new linked list
// let carry = 0;
// let result = null;

// // Add digits from the stacks and any carry until both stacks are empty
// while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
// 	let sum = carry;

// 	if (stack1.length > 0) {
// 		sum += stack1.pop();
// 	}

// 	if (stack2.length > 0) {
// 		sum += stack2.pop();
// 	}

// 	const node = new ListNode(sum % 10);
// 	node.next = result;
// 	result = node;

// 	carry = Math.floor(sum / 10);
// }

// return result;
//
