// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

var specialArray = function(nums) {
    //loop through nums; filter nums for >= i; use a conditional to see if filter.length === i, if so, return i; return false
    for(let i=1; i<=nums.length; i++){
        let great = nums.filter(el=> el>=i).length;
        if(great===i){
            return i;
        };
    };
    return -1
};

//given an array (nums) of non-negative integers; given the definition of special being that there are x numbers in the array that are >= x
//return x if the array is special; return -1 if it is not
//console.log(specialArray([3,5]); 2);
//console.log(specialArray([0,0]); -1);