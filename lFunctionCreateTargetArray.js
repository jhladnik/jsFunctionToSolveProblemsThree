// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

var createTargetArray = function(nums, index) {
    let target=[];
    for (let i=0; i<index.length; i++){
        target.splice(index[i],0,nums[i])
    }
    return target
};

//given two arrays, nums and index; both arrays are made up of integers
//return an array of integers; this array should be made up of the nums elements, but placed in the index integers index
//console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]), [0,4,1,3,2])
//console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]), [0,1,2,3,4])
//console.log(createTargetArray([1],[0]), [1])