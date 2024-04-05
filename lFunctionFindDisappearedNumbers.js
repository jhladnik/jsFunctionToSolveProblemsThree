// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

var findDisappearedNumbers = function(nums) {
    // create an empty array to hold our missing integers
    let missInt = [];

    // create a loop from 1 to the length of nums
    for (let i=1; i<=nums.length; i++) {
        // use a conditional to see if i exists in nums, if not, push to missInt
        if (nums.indexOf(i) === -1) {
            missInt.push(i);
        }
    }
    return missInt
};

// given an array of integers from 1 to n (nums)
// return an array of any integers that do not appear in the given array
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]); [5,6]);
// console.log(findDisappearedNumbers([1,1]); [2]);