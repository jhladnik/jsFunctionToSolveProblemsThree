// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

// For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

// Each element of nums is in exactly one pair, and
// The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

var minPairSum = function(nums) {
    //sort the array in ascending order; create an empty array to push sums to; run a loop over the sorted array; push the sum of array[i] and array[array.length-(1+i)] to the empty array; return the max integer in the new formed array
    let ordered = nums.sort((a,b)=>a-b);
    let sums = []
    for (let i=0; i<ordered.length; i++){
        sums.push(ordered[i]+ordered[ordered.length-(1+i)])
    }
    return Math.max(...sums)
};

//given an array of integers of an even length; need to pair up elements into groups of 2
//return the maximum sum of the pairs that are created
//console.log(minPairSum([3,5,2,3]), 7);
//console.log(minPairSum([3,5,4,2,4,6]), 8);