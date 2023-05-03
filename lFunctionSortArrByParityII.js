// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

var sortArrayByParityII = function(nums) {
    //use a filter to create arrays of odds and evens separate; create an empty array (matched); loop from 0 to nums.length/2, find matched.length/2 (idx) push to created array evens[idx] and odds[idx]; return matched
    let evens = nums.filter(el=>el%2===0);
    let odds = nums.filter(em=>em%2===1);

    let matched = [];

    for(let i=0; i<nums.length/2; i++){
        let idx = matched.length/2;
        matched.push(evens[idx]);
        matched.push(odds[idx]);
    };
    return matched
};

//given an array of integers (nums) where half of the integers are even and half are odd
//return an array where on even indices, even integers occur and odd indices, odd integers occur
//console.log(sortArrayByParityII([4,2,5,7]), [4,5,2,7]);
//console.log(sortArrayByParityII([2,3]), [2,3]);
