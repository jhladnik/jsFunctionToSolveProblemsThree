// You are given a 1-indexed array of distinct integers nums of length n.

// You need to distribute all the elements of nums between two arrays arr1 and arr2 using n operations. In the first operation, append nums[1] to arr1. In the second operation, append nums[2] to arr2. Afterwards, in the ith operation:

// If the last element of arr1 is greater than the last element of arr2, append nums[i] to arr1. Otherwise, append nums[i] to arr2.
// The array result is formed by concatenating the arrays arr1 and arr2. For example, if arr1 == [1,2,3] and arr2 == [4,5,6], then result = [1,2,3,4,5,6].

// Return the array result.

var resultArray = function(nums) {
    // initialize arr1 and arr2; loop through nums and use a conditional to see which i it is; use the constraints and rules given to push the element to the correct array; create a variable that should hold the concatenated array (together); return together
    let arr1 = [];
    let arr2 = [];

    for (let i=0; i<nums.length; i++) {
        if (i <= 1 && i%2 === 0) {
            arr1.push(nums[i]);
        } else if (i <= 1 && i%2 === 1) {
            arr2.push(nums[i]);
        } else {
            if (arr1[arr1.length-1] >= arr2[arr2.length-1]) {
                arr1.push(nums[i]);
            } else {
                arr2.push(nums[i]);
            }
        }
    }

    let together = arr1.concat(arr2)
    return together
};

// given an array of integers (nums)
// return an array that has been concatenated of arr1 and arr2 whereas the first element of nums should go to arr1, the second to arr2, then with every element after that, if the last element of arr1 > last element of arr2, the integer should go to arr1, else arr2
// console.log(resultArray([2,1,3]), [2,3,1]);
// console.log(resultArray([5,4,3,8]), [5,3,4,8]);