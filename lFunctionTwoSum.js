// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    // loop through nums; nest a loop starting from j = i+1; use a conditional to see if the two pointers sum to target, if so, return [i,j]
    for (let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

// given an array of integers (nums); given an integer (target)
// return the indices of the integers that have a sum of target; there will be only one solution in each nums
// console.log(twoSum([2,7,11,15], 9), [0,1]);
// console.log(twoSum([3,2,4], 6), [1,2]);
// console.log(twoSum([3,3], 6), [0,1]);