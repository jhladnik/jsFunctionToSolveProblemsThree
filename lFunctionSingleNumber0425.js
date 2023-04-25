// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.


var singleNumber = function(nums) {
    //filter out the integers that have the same first index and last index, return this
    return nums.filter(el=>nums.indexOf(el)===nums.lastIndexOf(el))
};

//given an array of integers with exactly two entries only appearing once and the rest of the elements appearing twice
//return the two integers that only appear once in any order; the solution must run in linear time and constant space
//console.log(singleNumber([1,2,1,3,2,5]), [3,5]);
//console.log(singleNumber([-1,0]), [-1,0]);
//console.log(singleNumber([0,1]), [1,0]);