// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

var threeConsecutiveOdds = function(arr) {
    //if array is less than 3 in length return false; else, create a counter to count our consecutive odds; loop through the array and use a conditional to see if there is an element that is an odd element, if there is...increment the counter; if counter gets to 3, return true; if we hit an element that is even, count = 0; else return false
    if(arr.length<3){
        return false;
    }else{
        let numOfOdds = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]%2 !== 0){
                numOfOdds++;
                if(numOfOdds===3){
                    return true;
                };
            }else{
                numOfOdds = 0;
            };
        };
        return false;
    }
};

//given an array of integers; all integers are of positive value
//return true if there are 3 consecutive values that are odd in the given array; return false if there are not 3 consecutive values that are odd in the given array
//console.log(threeConsecutiveOdds([2,6,4,1]), false);
//console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]), true);