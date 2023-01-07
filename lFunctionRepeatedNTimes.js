// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

var repeatedNTimes = function(nums) {
    //sort the array in increasing order; loop over the sorted array and if the next number is the same, return it
    let ordered = nums.sort((a,b)=>a-b);
    for (let i=0; i<ordered.length; i++){
        if(ordered[i]==ordered[i+1]){
            return ordered[i]
        }
    }
};

//given an array of numbers (nums); nums.length == 2*n; nums contains n+1 unique elements; one element is repeated n times
//return the number that is repeated n times
//console.log(repeatedNTimes([1,2,3,3]), 3);
//console.log(repeatedNTimes([2,1,2,5,3,2]), 2);
//console.log(repeatedNTimes([5,1,5,2,5,3,5,4]), 5);