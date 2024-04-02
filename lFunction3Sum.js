// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
    // sort the array to help move faster
    nums.sort((a,b)=>a-b);

    // create an empty array to hold our 3's
    let please = [];

    // loop through the array of nums
    for (let i=0; i<nums.length-2; i++) {
        // we need to skip our dupes
        if (i>0 && nums[i] === nums[i-1]) continue;

        // create a pointer for the left and right
        let left = i+1;
        let right = nums.length-1;

        // use a while statement to get through the array and find the
        // integers we need
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                please.push([nums[i], nums[left], nums[right]]);

                // need to skip any surrounding duplicates
                while (nums[left] === nums[left+1]) left++;
                while (nums[right] === nums[right-1]) right--;

                // need to advance the pointers if we have a 3way
                left++;
                right--;

            } else if (sum < 0 ) {
                left++;
            } else {
                right--;
            }
        }
    }
    // return our array after we have run through all of the possibilites
    return please  
};

// given an array of integers (nums)
// return an array of subarrays that consist of 3 of the unique integers from nums
// and together, the three sum to 0
// console.log(threeSum([-1,0,1,2,-1,-4]); [[-1,-1,2],[-1,0,1]]);
// console.log(threeSum([0,1,1]); []);
// console.log(threeSum([0,0,0]); [[0,0,0]]);