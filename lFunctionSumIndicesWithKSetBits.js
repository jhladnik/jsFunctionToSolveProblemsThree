// You are given a 0-indexed integer array nums and an integer k.

// Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.

// The set bits in an integer are the 1's present when it is written in binary.

// For example, the binary representation of 21 is 10101, which has 3 set bits.

var sumIndicesWithKSetBits = function(nums, k) {
    let setBit = [];

    for (let i=0; i<nums.length; i++) {
        let bi = (i).toString(2);
        let arrOfBi = bi.split("");
        let numOfBi = arrOfBi.map(el => {return Number(el)})
        let sum = numOfBi.reduce((acc,c) => acc+c, 0);
        if (sum === k) {
            setBit.push(nums[i]);
        }
    }

    let resSum = setBit.reduce((acc,c) => acc+c, 0);
    return resSum
    
};

// console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1), 13);
// console.log(sumIndicesWithKSetBits([4,3,2,1], 2), 1);