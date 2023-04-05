// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function(arr) {
    //create an empty array; push -1 to arr; loop through arr to arr.length-1 and create a slice from i+1; push Math.max() of the slice to the empty array; return the array
    let maxRes = [];

    arr.push(-1);
    
    for(let i=0; i<arr.length-1; i++){
        let cut = arr.slice(i+1);
        maxRes.push(Math.max(...cut));
    };
    return maxRes
};

//given an array of integers
//return an array of integers; the integers that make the array up should represent the greatest value to the right of arr[i]; if there are no elements to the right of arr[i], -1 should be the integer returned for that element;
//console.log(replaceElements([17,18,5,4,6,1]), [18,6,6,6,1,-1]);
//console.log(replaceElements([400]), [-1]);