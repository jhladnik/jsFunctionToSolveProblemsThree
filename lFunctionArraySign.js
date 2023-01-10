// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

var arraySign = function(nums) {
    //use a loop to find if the given array contains a 0 or not, if it does, return 0, else reduce the given array; use a conditional to return 1 or -1 depending on the result of the reduction
    for (let i=0; i<nums.length; i++){
        if(nums[i]===0){
            return 0
        };
    };

    let product = nums.reduce((acc,c)=>acc*c,1);
        
    if(product>0){
        return 1;
    }else{
        return -1;
    };
    
};

//given an array of integers; a function signFunc(x) has been declared and returns 1 if x is positive, -1 if x is negative, and 0 if x is equal to 0
//return what x should be equal to
//console.log(arraySign([-1,-2,-3,-4,3,2,1]), 1);
//console.log(arraySign([1,5,0,2,-3]), 0);
//console.log(arraySign([-1,1,-1,1,-1]), -1);