// You are given two arrays of equal length, nums1 and nums2.

// Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

// As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

// Return the integer x.


var addedInteger = function(nums1, nums2) {
    // Find the sum of each of the arrays given
    let oneSum = nums1.reduce((acc,c) => acc+c, 0);
    let twoSum = nums2.reduce((acc,c) => acc+c, 0);

    // Find the difference of nums2 and nums1
    let diff = twoSum - oneSum;

    // Return the difference divided by the length of one of the given arrays
    return diff/nums2.length
};

// Given two integer arrays "nums1" and "nums2"
// Return the integer that each element in nums1 has been increased by to equal the elements in nums2 in no particular order
// console.log(addedInteger([2,6,4], [9,7,5]), 3);
// console.log(addedInteger([10], [5]), -5);
// console.log(addedInteger([1,1,1,1], [1,1,1,1]), 0);