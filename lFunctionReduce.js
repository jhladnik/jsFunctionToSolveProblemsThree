// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
    // Use Array.reduce method to pass nums, fn, using init as the initial value
    let arrSol = nums.reduce((accum, curr) => fn(accum, curr), init);

    // Return the value given
    return arrSol
};

// Given an array of integers or an empty array "nums"; given a function to pass the elements of nums through with the preceding element/integer being "accum" and the current element/integer being "curr"; given an initial value of "init"
// Return an integer value that is the sum given nums, fn, and init; if nums is empty, return init
// console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0), 10);
// console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100), 130);
// console.log(reduce([], function sum(accum, curr) { return 0; }, 25), 25);