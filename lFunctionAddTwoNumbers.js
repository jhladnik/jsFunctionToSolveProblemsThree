// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//  create a new list to hold the sums of the two linked lists
class Node {
    constructor(val=0) {
        this.val = val;
        this.next = null;
    }
}

var addTwoNumbers = function(l1, l2) {
    // create a placeholder for the result list's head
    let head = new Node(0);
    // current node in the result list
    let node = head;
    // store carry over if needed
    let carry = 0;


    while (l1 || l2 || carry) {
        let val1 = 0, val2 = 0;
        if(l1) {
            // value from the first list
            val1 = l1.val;
            // moving to the next node
            l1 = l1.next
        }
        if(l2) {
            // value from the second list
            val2 = l2.val;
            // moving to the next again
            l2 = l2.next;
        }

        // calculate the sum of the digits plus any carry
        let sum = val1 + val2 + carry;
        // calculate the new carry
        carry = Math.floor(sum/10);
        // create a new node with the sum digit
        node.next = new Node(sum%10);
        // move to the newly created node
        node = node.next;
    }
    return head.next
};