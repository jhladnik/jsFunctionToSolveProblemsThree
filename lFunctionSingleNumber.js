// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    //get through the array to find if the first index is equal to the last index of the element
    let single = nums.filter(el=>nums.indexOf(el)==nums.lastIndexOf(el));
    return single
};

//given an array of integers with one of the integers occuring only once
//return the integer that only appears once
//input([1,2,1,2,4]), output(4);
//input([1]), output(1);
//input([3,2,3,4,5,4,5,1,8,8]), output(1)