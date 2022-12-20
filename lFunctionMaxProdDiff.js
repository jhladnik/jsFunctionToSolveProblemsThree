// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

var maxProductDifference = function(nums) {
    //sort the array from smallest to largest value; create an array (arr1) of the first 2 integers in the array, multiply; create an array (arr2) from the last 2 integers in the array, multiply; return arr2product - arr1Product
    nums.sort((a,b)=>a-b);
    let arr1Product = nums[0]*nums[1];
    let arr2Product = nums[nums.length-1]*nums[nums.length-2];
    return arr2Product-arr1Product
};

//given an array of integers
//return the maximum product difference that can be found from using 4 of the integers of the given array
//console.log(maxProductDifference([5,6,2,7,4]), 34);
//console.log(maxProductDifference([4,2,5,9,7,4,8]), 64);