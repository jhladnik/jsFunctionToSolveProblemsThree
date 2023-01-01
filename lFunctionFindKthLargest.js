// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.


var findKthLargest = function(nums, k) {
    //sort the array; subtract k from the length and return that as the index
    let ordered = nums.sort((a,b)=>a-b);
    return ordered[ordered.length-k]
};

//given an array of integers (nums) and an integer (k)
//return the kth largest element in the array
//console.log(findKthLargest([3,2,1,5,6,4], 2), 5);
//console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4);