// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

var leftRigthDifference = function(nums) {
    //create an empty array; initialize a left variable at 0; initialize a right variable at 0; sum nums and make it the new value for right; loop through nums and subtract the element from right, push the absolute value of left-right, then increment left with the value of the element; return the created array
    let answer = [];
  
    let left = 0;
    let right = 0;
  
    for (var i = 0; i < nums.length; i++) {
        right += nums[i];
    }
  
    for (var i = 0; i < nums.length; i++) {
        right -= nums[i];
        answer.push(Math.abs(left - right));
        left += nums[i];
    }
    return answer;
};

//given an array of integers
//return an array that the elements are defined by the sum of elements to the left of the element in question minus the sum of the elements to the right of the element in question
//console.log(leftRightDifference([10,4,8,3]), [15,1,11,22]);
//console.log(leftRightDifference([1]), [0]);