// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

// Return true if you can make arr equal to target or false otherwise.

var canBeEqual = function(target, arr) {
    //sort both arrays in non-decreasing order; loop through the sorted target array and if a value in it is not equal to the value in arr array in the same index, throw a false, otherwise true
    let tarjayInOrd = target.sort((a,b)=>a-b);
    let arrInOrd = arr.sort((a,b)=>a-b);

    for(let i=0; i<tarjayInOrd.length; i++){
        if(tarjayInOrd[i]!==arrInOrd[i]){
            return false
        }
    }
    return true
};

//given two arrays of integers that will be of equal length (target and arr)
//return true if arr can become target with any number of steps; return false if it cannot
//console.log(canBeEqual([1,2,3,4],[2,4,1,3]), true);
//console.log(canBeEqual([7],[7]), true);
//console.log(canBeEqual([3,7,9],[3,7,11]), false);