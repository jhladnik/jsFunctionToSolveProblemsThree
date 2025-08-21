// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

var minOperations = function(nums) {
    // Initialize a counter (count)
    let count = 0;

    // Initialize a new array for our newly created integers; leave the first integer in the array as the first element in nums
    let newNums = [nums[0]];

    // Loop through nums starting at the second element
    for (let i=1; i<nums.length; i++) {
        // Use a conditional to see if the iterator is less than or equal to the last element in newNums
        if (nums[i] <= newNums[newNums.length-1]) {
            // if so, add one to the element in newNums
            let res = newNums[newNums.length-1] + 1;
            // subtract the iterator from res to get the difference that we need to use
            let add = res - nums[i];
            // Add will now be the amount of operations needed to make the iterator more than the previous integer in the array
            count += add
            // Use that operation amount and add it to the iterator to show the new element in the array
            let newEl = add + nums[i]
            // Push the new integer to newNums
            newNums.push(newEl)
        } else {
            // if not, push the iterator to newNums
            newNums.push(nums[i]);
        }
    }
    // Return our count of operations
    return count
};

// Given an array of integers (nums); given the rule that we can increment an element in nums by one with every operation
// Return the amount of operations it would take to make nums increasing
// console.log(minOperations([1,1,1]), 3);
// console.log(minOperations([1,5,2,4,1]), 14);
// console.log(minOperations([8]), 0);