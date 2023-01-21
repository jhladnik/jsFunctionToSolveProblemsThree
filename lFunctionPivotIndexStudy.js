// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndex = function(nums) {
    //find the sum of the entire array; loop through the array and slice a new array from 0th element to ith element, sum this array; use a conditional to see if the original sum - new array sum - element value === new array sum; if it is true, return i; else return -1
    let sum = nums.reduce((acc,c)=>acc+c,0);
    for(let i=0; i<nums.length; i++){
        let before = nums.slice(0,i);
        let beforeSum = before.reduce((acc,c)=>acc+c, 0);
        
        if(sum-beforeSum-nums[i]===beforeSum){
            return i
        }
    }
    return -1
};

//given an array of integers which can be a combination of negative or positive values
//return the index of the element at which all elements before it sum the same value as all of the elements after it; if no such element exists, return -1
//console.log(pivotIndex([1,7,3,6,5,6]), 3);
//console.log(pivotIndex([1,2,3]), -1);
//console.log(pivotIndex([2,1,-1]), 0);