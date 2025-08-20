// You are given an integer array nums and an integer k. You can perform the following operation any number of times:

// Select an index i and replace nums[i] with nums[i] - 1.
// Return the minimum number of operations required to make the sum of the array divisible by k.

var minOperations = function(nums, k) {
    // Sum the array nums (sum); use a conditional to see if the sum can be divided by k without any operations, if so, return 0, else return the remainder of sum % k

    let sum = nums.reduce((a, c) => a+c, 0);

    if (sum % k === 0) {
        return 0
    } else {
        return sum % k
    }
};

// Given an array of integers (nums) and an integer k; given the rule that the operation of nums[i] can be replaced by nums[i] - 1 any amount of times
// return the minimum number of operations that it will take the sum of nums to be divisible by k
// console.log(minOperations([3,9,7], 5), 4);
// console.log(minOperations([4,1,3], 4), 0);
// console.log(minOperations([3,2], 6), 5);