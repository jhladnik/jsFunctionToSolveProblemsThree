// Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.

var smallestEqual = function(nums) {
    //return the first index that fulfills the conditon
    for(let i=0; i<nums.length; i++){
        if(i%10 == nums[i]){
            return i;
        }
    };
    return -1
};

//given an array of integers (nums)
//return the smallest index that satisfies the following condition: i%10 == nums[i]; if there is no index that fulfills this condition, return -1
//console.log(smallestEqual([0,1,2]), 0);
//console.log(smallestEqual([4,3,2,1]), 2);
//console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0]), -1);