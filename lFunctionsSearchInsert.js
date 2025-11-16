// BINARY SEARCH SOLUTION
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    // Use a binary search for the O(log n) complexity required
    // Initialize the variable for the beginning of the array
    let small = 0;

    // Initialize the variable for the end of the array
    let large = nums.length-1;

    // Use a while loop to find the middle of the array, a conditional to find if the middle element is the target, or else another conditional to find if the target is on the small or large side by decrementing the large or incrementing the small sides
    while (small <= large) {
        let middle = Math.floor((small + large) / 2);

        if(nums[middle] === target) {
            return middle;
        }

        if (nums[middle] < target) {
            small = middle+1;
        } else {
            large = middle-1;
        }
    }

    return small

};

// Given a sorted array of distinct integers "nums", and an integer "target"; given that the problme has to be solved with O(log n) complexity
// Return the index that target is found in nums if target exists in nums, else return the index where target should be placed
// console.log(searchInsert([1,3,5,6], 5), 2);
// console.log(searchInsert([1,3,5,6], 2), 1);
// console.log(searchInsert([1,3,5,6], 7), 4);