// You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:

// Replace each even number with 0.
// Replace each odd numbers with 1.
// Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.

var transformArray = function(nums) {
    // create an array (result); loop through nums and check if the element is odd or even; push the correct replacement into result; return result sorted

    let result = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(0);
        } else {
            result.push(1)
        }
    }

    return result.sort()
};

// Given an array of integers (nums); given the rule to replace every even number with 0; given the rule to replace every odd number with 1
// Return an array of the results in increasing order
// console.log(transformArray[4,3,2,1], [0,0,1,1]);
// console.log(transformArray[1,5,1,4,2], [0,0,1,1,1]);