// You are given an integer array nums.

// The alternating sum of nums is the value obtained by adding elements at even indices and subtracting elements at odd indices. That is, nums[0] - nums[1] + nums[2] - nums[3]...

// Return an integer denoting the alternating sum of nums.

var alternatingSum = function(nums) {
    // Initialize "sum" to hold the sum of the index
    let sum = 0

    // Loop through nums, use a conditional to see if the index is even or odd, if even, add to sum, else subtract from sum
    for (let i=0; i<nums.length; i++) {
        if(i % 2 === 0) {
            sum+=nums[i]
        } else {
            sum-=nums[i]
        }
    }

    // Return sum
    return sum
};

// Given an array of integers "nums"; given that if the index in nums is an even index, the integer at that index is to be added and if the index is an odd index, the integer at that index is to be subtracted
// Return the sum of the array given the parameters
// console.log(alternatingSum([1,3,5,7]), -4);
// console.log(alternatingSum([100]), 100);