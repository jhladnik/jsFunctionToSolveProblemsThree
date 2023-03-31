// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]


var checkIfExist = function(arr) {
    //loop through arr using i; nest a loop and see if i*2 exists; throw true if you find it; else false
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if (arr[i]*2 === arr[j] && i!==j){
                return true
            };
        };
    };
    return false
};

//given an array of integers
//return true if there is one integer in the array (num) that exists which num*2 also exists in the array; false if else
//console.log(checkIfExist([10,2,5,3]), true);
//console.log(checkIfExist([3,1,7,11]), false);