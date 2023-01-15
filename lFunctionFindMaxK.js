// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

var findMaxK = function(nums) {
    //sort the array in decreasing order; loop over the array and use a conditional to see if the negative of the value exists; if it does return the value; if there is no value that has a negative representation, return -1
    nums.sort((a,b)=>b-a);
    for(let i=0; i<nums.length; i++){
        if(nums.indexOf(nums[i]-(nums[i]*2))!==-1){
            return nums[i];
        }   
    }
    return -1
};

//given an array of integers of both negative and positive values
//return the largest integer in the array that also has a negative representation in the array; return -1 if there is no integer that has both a positive and negative representation
//console.log(findMaxK([-1,2,-3,3]), 3);
//console.log(findMaxK([-1,10,6,7,-7,1]), 7);
//console.log(findMaxK([-10,8,6,7,-2,-3]), -1);