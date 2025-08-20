// You are given a 0-indexed integer array nums, and an integer k.

// In one operation, you can remove one occurrence of the smallest element of nums.

// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

var minOperations = function(nums, k) {
    // create a variable (count) to keep track of the amount of operations needed; loop through nums; use a conditional inside of the loop to see if nums[i] is less than k, if so, increment count; return count when loop is complete
    let count = 0

    for (let i=0; i<nums.length; i++) {
        if (nums[i] < k) {
            count++
        }
    }

    return count
};

// Given an array of integers (nums) and an integer k; given the rule that on any operation, one of the integers contained in nums can be removed if it is less than k 
// Return the amount of operations it takes to remove all integers less than k
// console.log(minOperations([2,11,10,1,3], 10), 3);
// console.log(minOperations([1,1,2,4,9], 1), 0);
// console.log(minOperations([1,1,2,4,9], 9), 4);