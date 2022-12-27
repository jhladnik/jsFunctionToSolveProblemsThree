// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

var targetIndices = function(nums, target) {
    //sort the array in increasing order; create an empty array; loop through the sorted array and use a conditional to see if the elements are the same as the target, if they are, push the index of that element to the new array; return the new array
    let order = nums.sort((a,b)=>a-b);
    const result = [];
    for (let i=0; i<order.length; i++){
        if (order[i]==target){
            result.push(i)
        }
    }
    return result
};

//given an array of integers unsorted, and a target which is the target value
//return a list of the indices of the target value in increasing order
//console.log(targetIndices([1,2,5,2,3], 2), [1,2]);
//console.log(targetIndices([1,2,5,2,3], 3), [3]);
//console.log(targetIndices([1,2,5,2,3], 5), [4]);