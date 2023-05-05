// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

var findLucky = function(arr) {
    //create a new Set (arrSet) to find the unique integers; sort in decreasing order; loop through arrSet; on each iteration filter arr for the integer; use a conditional to see if length === arrSet[i], if true, return it; after loop return -1
    let arrSet = [...new Set(arr)];
    arrSet.sort((a,b)=>b-a);

    for(let i=0; i<arrSet.length; i++){
        let num = arr.filter(el=>el===arrSet[i]);
        if((num.length)===arrSet[i]){
            return arrSet[i];
        };
    };
    return -1
};

//given an array of integers
//return the largest integer that occurs the number of times that the integer is, i.e. the integer 3 occurs 3 times in the array; return -1 if there is no such integer in the array
//console.log(findLucky([2,2,3,4]), 2);
//console.log(findLucky([1,2,2,3,3,3]), 3);
//console.log(findLucky([2,2,2,3,3]), -1);