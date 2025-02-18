// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

var minimumAbsDifference = function(arr) {
    // create an array as a holder for differences (diffs); create an empty array (pairs); sort arr in ascending order; loop through arr and find the absolute differences between all adjacent elements and push to diffs; find the smallest integer in diffs (smalls); loop through arr again; if arr[j] and the adjacent integer have a difference of smalls, push an array of the two integers; return pairs
    let diffs = [];

    let pairs = [];

    arr.sort((a,b) => a-b);

    for (let i=1; i<arr.length; i++) {
        let diff = arr[i] - arr[i-1];
        diffs.push(Math.abs(diff));
    }

    let smalls = Math.min(...diffs);

    for (let j=1; j<arr.length; j++) {
        // for(let k=j; k<arr.length; k++) {
        //     if (k !== j && arr[k] - arr[j] === smalls) {
        //         pairs.push([arr[j],arr[k]])
        //     }
        // }
        if (arr[j]-arr[j-1] === smalls) {
            pairs.push([arr[j-1],arr[j]])
        }
    }
    return pairs
};

// given an array of distinct integers (arr)
// return a list of all the pairs of integers in arr that have the minimum absolute difference; the list needs to be returned in ascending order
// console.log(minimumAbsDifference([4,2,1,3]), [[1,2],[2,3],[3,4]]);
// console.log(minimumAbsDifference([1,3,6,10,15]), [[1,3]]);
// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]), [[-14,-10],[19,23],[23,27]]);