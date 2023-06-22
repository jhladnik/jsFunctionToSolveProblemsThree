// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

var findNonMinOrMax = function(nums) {
    //loop through nums; use conditional to see if the integer is max or min of nums, if it is not, return it; outside of loop return -1
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== Math.max(...nums) && nums[i] !== Math.min(...nums)){
            return nums[i];
        }
    };
    return -1
};

//given an array of integers (nums)
//return any of the elements in nums that is neither the minimum or maximum value in the array; if there is no such element that fits these conditions, return -1
//console.log(findNonMinOrMax([3,2,1,4]), 3);
//console.log(findNonMinOrMax([1,2]), -1);
//console.log(findNonMinOrMax([2,1,3]), 2);