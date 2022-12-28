// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.



var numberOfPairs = function(nums) {
    //create an object of the nums and how many times they each occur; create two empty arrays, one for number of pairs and one for number of leftovers; loop through the object created and if the value % 2 ===0, push the value/2 to pairs, else push 1 to leftovers and push val-1 / 2 to pairs; reduce both arrays and return the values in a single array
    let numMap = {};

    for (let n of nums){
        if (numMap.hasOwnProperty(n)){
            numMap[n]++;
        }else{
            numMap[n]=1
        }
    };

    let pairs = [];
    let leftOvers = [];

    for (const val in numMap){
        if (numMap[val]%2===0){
            pairs.push(numMap[val]/2);
        }else{
            leftOvers.push(1);
            pairs.push((numMap[val]-1)/2);
        }
    }
    let numOfPairs = pairs.reduce((acc,c)=>acc+c,0);
    let numOfleft = leftOvers.reduce((acc,c)=>acc+c,0);
    return [numOfPairs, numOfleft]
};

//given an array of integers
//return an array with the first element being the number of exact match pairs are in the given array and the second element being the number of integers leftOver
//console.log(numberOfPairs([1,3,2,1,3,2,2]), [3,1]);
//console.log(numberOfPairs([1,1]), [1,0]);
//console.log(numberOfPairs([0]), [0,1]);
