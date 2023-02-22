// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].


var separateDigits = function(nums) {
    //map throught the array and for each element, change it to a string, separate it into an array; return that array after flattening it and then mapping through it and changing each element back to an integer
    let divorcedNum = nums.map(el=>{
       return el.toString().split("");
    });

    let noSubs = divorcedNum.flat();

    return noSubs.map(str=>{
        return Number(str)
    });
};

//given an array of integers
//return an array (answer) that consists of the given integers separated into single digits in the same order as they have appeared
//console.log(separateDigits([13,25,83,77]), [1,3,2,5,8,3,7,7]);
//console.log(separateDigits([7,1,3,9]), [7,1,3,9]);
//console.log(separateDigits([]), []);