// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

var isMonotonic = function(nums) {
    //create a slice of the entire nums array (dupe); use a conditional to see if the 0th element is the smallest value of dupe, if so, sort in increasing order, else, sort in decreasing order; loop through nums and the values are not equal to dupe values, return false, else true
    let dupe = nums.slice(0);

    if(Math.min(...dupe) === nums[0]){
        dupe.sort((a,b)=>a-b);
    }else{
        dupe.sort((a,b)=>b-a);
    };

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== dupe[i]){
            return false
        }
    };
    return true;
};

//given an array of integers (nums)
//return true if nums is increasing or decreasing from 0th element to the last element, else return false
//console.log(isMonotonic([1,2,2,3]), true);
//console.log(isMonotonic([6,5,4,4]), true);
//console.log(isMonotonic([1,3,2]), false);