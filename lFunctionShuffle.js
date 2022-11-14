// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function(nums, n) {
    let result = [];
    for (let i=0; i<nums.length/2; i++){
        result.push(nums[i]);
        result.push(nums[i+n])
    }
    return result
};

//given an array of numbers that are duplicated at the nth-1 index, and the number n
//return an array of the elements in the order they come in if the array were split at the duplicate
//and shuffled 1/1,2/2,3/3,etc.
//input([2,5,1,3,4,7], 3), output([2,3,5,4,1,7]);
//input([1,2,3,4,4,3,2,1], 4), output([1,4,2,3,3,2,4,1])