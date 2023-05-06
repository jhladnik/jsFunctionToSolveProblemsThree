// You are given two 0-indexed integer arrays nums and divisors.

// The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].

// Return the integer divisors[i] with the maximum divisibility score. If there is more than one integer with the maximum score, return the minimum of them.

var maxDivScore = function(nums, divisors) {
    //create a new Set of divisors to make sure we don't have to do extra (set); sort the set in increasing value; create an empty array (counterArr); loop through set; create a counter; nest a loop through nums, use a conditional to see if nums[j]%set[i] === 0, if so, increment the counter; push [set[i],counter] to counterArr; sort counterArr by the counter values; return the first element of the first subarray in counterArr
    let set = [...new Set(divisors)];
    set.sort((a,b)=>a-b);

    let counterArr = [];

    for(let i=0; i<set.length; i++){
        counter = 0
        for(let j=0; j<nums.length; j++){
            if(nums[j] % set[i] === 0){
                counter++
            };
        };
        counterArr.push([set[i],counter]);
    };

    counterArr.sort((a,b)=>b[1]-a[1]);
    return counterArr[0][0]
};

//given 2 arrays of integers, (nums) and (divisors)...appropriately named
//return the element of divisors that is the divisor for the most elements in nums; if there is 2 elements that are equal in the amount of nums that they are the divisors for, return the element with the least value
//console.log(maxDivScore([4,7.9.3.9],[5,2,3]), 3);
//console.log(maxDivScore([20,14,21,10],[5,7,5]), 5);
//console.log(maxDivScore([12],[10,16]), 10);
