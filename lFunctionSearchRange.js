// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function(nums, target) {
    let first = nums.indexOf(target);
    let last = nums.lastIndexOf(target);
    return [first,last]
};

//given an array of integers and a target integer
//return the starting and ending index location of the given target in an array; if the target does not exist in the array, return -1
//input(nums=[5,7,7,8,8,10], target = 8), output([3,4])
//input(nums=[5,7,7,8,8,10], target = 3), output([-1,-1])