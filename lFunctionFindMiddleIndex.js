// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

var findMiddleIndex = function(nums) {
    //find the sum of the entire array; loop through the array; create a copy array from 0 to i and sum this array; use conditional to find if sum-beforeSum-nums[i] is the same value as beforeSum, if it is return i, if there isn't an index that fulfills, return -1
    let sum = nums.reduce((acc,c)=>acc+c,0);
    for(let i=0; i<nums.length; i++){
        let before = nums.slice(0,i);
        let beforeSum = before.reduce((acc,c)=>acc+c, 0);

        if(sum-beforeSum-nums[i]===beforeSum){
            return i
        }
    }
    return -1
};

//given an array of integers; they may be both negative and positive
//return the index number at which all elements before and after are the same sum in value; return -1 if no such element exists
//console.log(findMiddleIndex([2,3,-1,8,4]), 3);
//console.log(findMiddleIndex([1,-1,4]), 2);
//console.log(findMiddleIndex([2,5]), -1);