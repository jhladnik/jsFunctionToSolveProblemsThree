// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

var findDisappearedNumbers = function(nums) {
    // Create a Set from nums for quick lookups and better time complexity
    let singles = new Set(nums);
    // Initialize an array to hold our missing integers
    let missing = [];

    // Loop from 1 to nums.length checking to see if the iterator is in nums, if not, push to missing
    for (let i=1; i<=nums.length; i++) {
        // If the current integer is not in singles, push
        if(!singles.has(i)) {
            missing.push(i)
        }
    }

    // Return the missing array
    return missing
};

// Given an array of integers "nums" where the elements consist of integers from 1 to nums.length
// Return an array of integers that are missing from the range of 1 to nums.length
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]), [5,6]);
// console.log(findDisappearedNumbers([1,1]), [2]);