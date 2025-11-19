// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


var filter = function(arr, fn) {
    // Create a variable that runs arr through filter and applies fn to the element and/or the index of the element
    let filteredArr = arr.filter(el => fn(el, arr.indexOf(el)));

    // Return the new filtered array
    return filteredArr
};

// Given an array of integers "arr" and a function that will be used for filtering "fn"; given the stipulation that the Array.filter method needs to be used
// Return an array of integers that can either be from arr or the index of arr[i] that fit fn
// console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }), [20,30]);
// console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; }), [1]);
// console.log(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 }), [-2,0,1,2]);