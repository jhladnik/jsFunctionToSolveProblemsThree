// Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

var numOfPairs = function(nums, target) {
    //create a counter; create a copy of nums; loop through nums; nest a loop of the copy; concatenate the two elements; use a conditional to see if the concatenated strings are equal to the target but the indices are not equal to eachother, if they fit these conditions, increment the counter; return the counter
    let targetAcq = 0;
    let copy = nums.slice(0);

    for (let i=0; i<nums.length; i++){
        for(let j=0; j<copy.length; j++){
            let together = nums[i]+copy[j];

            if(together===target && i!==j){
                targetAcq++;
            }
        };
    };
    return targetAcq;
};

//given an array of integers as strings; given a target string (target)
//return an integer that represents how many different ways that target can be made by concatenating elements in the array; the same element cannot be added to itelf to create the target
//console.log(numOfPairs(["777","7","77","77"], "7777"), 4);
//console.log(numOfPairs(["123","4","12","34"], "1234"), 2);
//console.log(numOfPairs(["1","1","1"], "11"), 6);