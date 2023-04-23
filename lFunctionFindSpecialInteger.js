// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

var findSpecialInteger = function(arr) {
    //create a new set (unique) of arr; loop through the new set; use filter (samesies) inside the loop to find all of the same-valued integers in arr; divide samesies.length by arr.length and if the value >= .25, return unique[i]
    let unique = [...new Set(arr)];

    for(let i=0; i<unique.length; i++){
        let samesies = arr.filter(el=>el===unique[i]);
        if(samesies.length/arr.length > 0.25){
            return unique[i];
        };
    };
};

//given an array of integers sorted in increasing order
//return the integer that occurs in >= 25% of the elements
//console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]), 6);
//console.log(findSpecialInteger([1,1]), 1);