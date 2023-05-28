// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

var findKthPositive = function(arr, k) {
    //create an empty array to hold our integers that are missing from a loop (missing); loop from 1 to arr[arr.length-1]; check to see if i is in arr, if not, push to missing; check to see if the length of missing < k; if so, k-(missing.length) should be added to arr[arr.length-1] and returned, else return missing[k-1]
    let missing = [];

    for(let i=1; i<arr[arr.length-1]; i++){
        if(arr.indexOf(i)===-1){
            missing.push(i);
        }
    };

    if(missing.length < k){
        let diff = k-missing.length;
        return arr[arr.length-1]+diff;
    }
    return missing[k-1]
};

//given an array of positive integers that are sorted in increasing order (arr); given a positive integer (k)
//return the kth integer that is missing from the array, assuming the array starts at 1
//console.log(findKthPositive([2,3,4,7,11], 5), 9);
//console.log(findKthPositive([1,2,3,4], 2), 6);