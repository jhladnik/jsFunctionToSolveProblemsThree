// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

var maximumCount = function(nums) {
    //use the filter method to find the integers in the array that are greater than 0 (pos); use the filter method to find the integers in the array that are less than 0 (neg); return the length of the longer array between the 2
    let pos = nums.filter(el => el>0);
    let neg = nums.filter(ex => ex<0);
    return pos.length>=neg.length ? pos.length:neg.length
};

//given an array of both negative and positive integers in non-decreasing order
//return the maximum number (count) of integers that are either greater than 0 or less than 0
//console.log(maximumCount([-2,-1,-1,1,2,3]), 3);
//console.log(maximumCount([-3,-2,-1,0,0,1,2]), 3);
//console.log(maximumCount([5,20,66,1314]), 4);