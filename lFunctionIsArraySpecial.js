// An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.

// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

var isArraySpecial = function(nums) {
    // if nums is less than 2 in length, return true, else loop through nums, if the first element is even the next has to be odd and vice versa return true, else return false
    if (nums.length < 2) {
        return true
    } else {
        for (let i=1; i<nums.length; i++) {
            if (nums[i-1] % 2 === 1 && nums[i] % 2 === 1) {
                return false
            } else if (nums[i-1] % 2 === 0 && nums[i] % 2 === 0) {
                return false
            }
        }
        return true
    }
};

// given an array of integers (nums); given the definition of special array being that if the parity of every adjacent element is opposite (odds vs. evens) in the array
// return true if the array is special; else false
// console.log(isArraySpecial([1]), true);
// console.log(isArraySpecial([2,1,4]), true);
// console.log(isArraySpecial([4,3,1,6]), false);