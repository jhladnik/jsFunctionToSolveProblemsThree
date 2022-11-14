// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function(nums) {
    //use the sort function to place the numbers in numeric order
    return nums.sort()
};

//given an array of numbers, (0,1,2), that represent the colors red, white and blue in that order
//return the array sorted so that the numbers that represent the same color are adjacent
//input([2,0,2,1,1,0]), output([0,0,1,1,2,2]);
//input([2,0,1]), output([0,1,2]);