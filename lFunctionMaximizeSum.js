// You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

var maximizeSum = function(nums, k) {
    //create an array containing Math.max(...nums); use a while statement to see if the empty array is < k, if it isn't add 1 to created array.length - 1 and push to created array; after while is exited, sum created array and return
    let theMax = [Math.max(...nums)];

    while(theMax.length<k){
        let last = theMax[theMax.length-1];
        theMax.push(last+1);
    };

    let sum = 0;

    for(let i=0; i<theMax.length; i++){
        sum += theMax[i];
    };

    return sum
};

//given an array of integers and an integer k
//return the max sum that can be achieved by removing one integer from nums and replacing it with the integer + 1, repeat this k times; sum the integers that have been removed
//console.log(maximizeSum([1,2,3,4,5], 3), 18);
//console.log(maximizeSum([5,5,5], 2), 11);