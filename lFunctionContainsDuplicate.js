// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    //filter out single occurrences of numbers, see if the array is the same length as the original or not
    let singles = nums.filter(el=>nums.indexOf(el)==nums.lastIndexOf(el));
    return nums.length!=singles.length? true:false
};

//given an array of integers
//return true if any of the integers occurs twice or more, return false if the array does not contain any integers occurring more than once