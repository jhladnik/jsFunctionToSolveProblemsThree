// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.

// Return the number of unique arithmetic triplets.

var arithmeticTriplets = function(nums, diff) {
    //create an empty array (used); create a counter; loop through nums; create a slice of nums from after i to the end (cut); use a conditional to see if the nums[i]+diff is an index in cut; if so, let nextInd = cut.indexOf(nums[i]+diff); create a slice after this element (cut2) and use a conditional to see if nums[i] + (2 * diff) exists in cut2; if so, increment counter; return counter
    let counter = 0;

    for(let i=0; i<nums.length; i++){
        let cut = nums.slice(i+1);
        if(cut.indexOf(nums[i]+diff)!==-1){
            let nextInd = cut.indexOf(nums[i]+diff);
            let cut2 = cut.slice(nextInd+1);
            if(cut2.indexOf(nums[i] + 2 * diff)!==-1){
                counter++
            };
        };
    };
    return counter
};

//given an array of increasing integers (nums); given an integer (diff)
//return an integer that represents the number of "triplets" that exist in nums which follow these specs: i<j<k; nums[j] - nums[i] == diff; nums[k] - nums[j] == diff; all triplets must be unique
//console.log(arithmeticTriplets([0,1,4,6,7,10], 3), 2);
//console.log(arithmeticTriplets([4,5,6,7,8,9], 2), 2);