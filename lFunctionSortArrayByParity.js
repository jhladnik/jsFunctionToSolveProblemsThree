// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

var sortArrayByParity = function(nums) {
    //create an empty array; loop through nums and if the element is an even, push to the created array; loop through the given array again and if the element is an odd, push to the created array; return the array
    let arr = [];

    for(let i=0; i<nums.length; i++){
        if(nums[i]%2===0){
            arr.push(nums[i]);
        };
    };

    for(let i=0; i<nums.length; i++){
        if(nums[i]%2===1){
            arr.push(nums[i]);
        };
    };
    return arr   
};

//given an array of integers
//return an array that has all of the even elements of the given array at the beginning followed by any odd integers in the array
//console.log(sortArrayByParity([3,1,2,4]), [2,4,3,1]);
//console.log(sortArrayByParity([0]), [0]);
//console.log(sortArrayByParity([1,2,3,4,5,6,7,8]), [2,4,6,8,1,3,5,7]);