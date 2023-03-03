// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

var minSubsequence = function(nums) {
    //sort the given array in decreasing order; loop through the given array; in the loop, create slices after the iterator to sum vs. the iterator summed to the 0th element; use a conditional to see if the elements that fit the criteria, if they do, return the sliced array to the 0th
    nums.sort((a,b)=>b-a);

    for(let i=0; i<nums.length; i++){
        let sumDis = nums.slice((i+1));
        let sumToEnd = sumDis.reduce((acc,c)=>acc+c,0);
        
        let sumDat = nums.slice(0,i+1);
        let sumToStrt = sumDat.reduce((acc,c)=>acc+c,0);
        if(sumToStrt>sumToEnd){
            return sumDat
        }
    };
};

//given an array of integers
//return a subarray in decreasing order of the given array that sums to be greater than the rest of the integers that make up the given array; if there are multiple results, return the result that has the minimum size, and if there are still multiple solutions, return the sub with the maximum total sum
//console.log(minSubsequence([4,3,10,9,8]), [10,9]);
//console.log(minSubsequence([4,4,7,6,7]), [7,7,6]);