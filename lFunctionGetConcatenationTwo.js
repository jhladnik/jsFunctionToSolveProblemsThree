// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

var getConcatenation = function(nums) {
    // create variable for a concatenation of nums; return the variable
    let ans = nums.concat(nums)
    return ans
};

// given an array of integers (nums)
// return an array (ans) that has two times the amount of elements in it and is nums repeated
// console.log(getConcatenation([1,2,1]), [1,2,1,1,2,1]);
// console.log(getConcatenation([1,3,2,1]), [1,3,2,1,1,3,2,1]);