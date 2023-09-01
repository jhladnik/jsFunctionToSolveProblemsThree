// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

var countPairs = function(nums, target) {
    //create a counter (count); sort nums in increasing order; loop through nums, slice from i+1; loop through slicedArr and check to see if i+j < target, if so, increment counter; return counter
    let count = 0;
    nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length; i++){
        let slicedArr = nums.slice(i+1);
        for(let j=0; j<slicedArr.length; j++){
            if(nums[i]+slicedArr[j]<target){
                count++;
            }
        };
    };

    return count
};

//given an array of integers that can be either negative, zero, or positive (nums); given an integer (target)
//return the number of pairs that when added together are less than target (i+j<target); also i<j
//console.log(countPairs([-1,1,2,3,1], 2), 3);
//console.log(countPairs([-6,2,5,-2,-7,-1,3], -2), 10);