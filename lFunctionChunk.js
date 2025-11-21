// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.

var chunk = function(arr, size) {
    // Initialize an array to hold the subarray chunks
    let sol = [];

    // Loop through arr using size as the increment, use slice to create a new array to push to sol
    for (let i=0; i<arr.length; i += size) {
        let chunky = arr.slice(i, i+size);
        sol.push(chunky)
    }

    return sol
};

// Given an array of integers or an empty array "arr" and given a chunk size "size" as an integer
// Return an array of subarrays of arr that are size in length, if the remainder of the elements of arr is less than size, return a subarray of the remainder length
// console.log(chunk([1,2,3,4,5], 1), [[1],[2],[3],[4],[5]]);
// console.log(chunk([1,9,6,3,2], 3), [[1,9,6],[3,2]]);
// console.log(chunk([8,5,3,2,6], 6), [[8,5,3,2,6]]);
// console.log(chunk([], 1), []);