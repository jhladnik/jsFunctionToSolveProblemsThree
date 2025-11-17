// You are given an integer array nums.

// Return the smallest index i such that the sum of the digits of nums[i] is equal to i.

// If no such index exists, return -1.



var smallestIndex = function(nums) {
    // Loop through nums

    for (let i=0; i<nums.length; i++) {
        // Change the element into a string
        let digStr = nums[i].toString();

        // Split the string into an array of strings and then change each to an integer
        let digits = digStr.split("").map(Number);

        // Sum the new array of integers
        let sum = digits.reduce((acc,c) => acc+c, 0);

        // Check to see if the sum is equal to the index number, if so return it
        if (sum === i) {
            return i
        }
    }

    // If there are no indices that fit the criteria, return -1
    return -1
};

// Given an array of integers "nums"
// Return the lowest index in which the element's digits sum to the nums index, if there are no indices that fit this specification, return -1
// console.log(smallestIndex([1,3,2]), 2);
// console.log(smallestIndex([1,10,11]), 1);
// console.log(smallestIndex([1,2,3]), -1);