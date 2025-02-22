class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    // First element of preorder is the root
    let rootValue = preorder.shift();
    let root = new TreeNode(rootValue);

    // Find root index in inorder array
    let rootIndex = inorder.indexOf(rootValue);

    // Recursively build left and right subtrees
    root.left = buildTree(preorder, inorder.slice(0, rootIndex));
    root.right = buildTree(preorder, inorder.slice(rootIndex + 1));

    return root;
}

// Example usage
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));




function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);       // Odd length palindrome
        expandAroundCenter(i, i + 1);   // Even length palindrome
    }

    return s.substring(start, start + maxLength);
}

// Example usage
console.log(longestPalindrome("babad")); // "bab" or "aba"



// Merge K Sorted lists

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists.length) return null;

    while (lists.length > 1) {
        let mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }

        lists = mergedLists;
    }

    return lists[0];
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
}

// Example usage
let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));

console.log(mergeKLists([list1, list2, list3]));



// 4. Meeting Rooms II

function minMeetingRooms(intervals) {
    if (!intervals.length) return 0;

    let startTimes = intervals.map(i => i[0]).sort((a, b) => a - b);
    let endTimes = intervals.map(i => i[1]).sort((a, b) => a - b);

    let rooms = 0, endIndex = 0;

    for (let i = 0; i < startTimes.length; i++) {
        if (startTimes[i] < endTimes[endIndex]) {
            rooms++;
        } else {
            endIndex++;
        }
    }

    return rooms;
}

// Example usage
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // Output: 2



// 5. Min Stack

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2



// 6. Top K Frequent Words

function topKFrequent(words, k) {
    let freqMap = new Map();

    // Count frequency of words
    for (let word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    // Sort words by frequency (descending) and lexicographically
    return [...freqMap.keys()]
        .sort((a, b) => freqMap.get(b) - freqMap.get(a) || a.localeCompare(b))
        .slice(0, k);
}

// Example usage
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i", "love"]


