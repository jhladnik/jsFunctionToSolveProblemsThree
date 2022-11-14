// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

var getConcatenation = function(nums) {
    //create an array twice the length of the given array using a duplicate of the given array
    return nums.concat(nums)
};

//given an array of integers of n length
//return an array of 2n in length by repeating the same values occuring in the given array, a second
//time, in order
//input([1,2,1]), output([1,2,1,1,2,1]);
//input([1,3,2,1]), output([1,3,2,1,1,3,2,1])