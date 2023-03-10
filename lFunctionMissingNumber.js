// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    //sort nums in increasing order; loop through nums using nums.length*2 (to cover edge case of last integer) as the limit; if i does not equal the element it is on, return it
    nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length*2; i++){
        if(i !== nums[i]){
            return i;
        }
    };
};

//given an array of integers (nums) that is a range from 0 to Math.max(...nums) missing one integer
//return the missing integer in the range
//console.log(nums([3,0,1]), 2);
//console.log(nums([0,1]), 2);
//console.log(nums([9,6,4,2,3,5,7,0,1]), 8);