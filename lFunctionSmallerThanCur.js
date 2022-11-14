// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
    //create an empty array, then loop over the input from the front, nest another loop that will
    //increment a counter if it is less than the first number, return the resulting array
    let lessThan = [];
    for (let i=0; i<nums.length; i++){
        let counter = 0;
        for (let y=nums.length-1; y>=0; y--){
            if(nums[i]>nums[y]){
                counter +=1;
            }
        }
        lessThan.push(counter)
    }
    return lessThan
};

//given an array of integers
//return an array of integers, each element representing how many numbers in the array are less than the number in that index
//input([8,1,2,2,3]), output([4,0,1,1,3]);
//input([6,5,4,8]), output([2,1,0,3]);
//input([7,7,7,7]), output([0,0,0,0])