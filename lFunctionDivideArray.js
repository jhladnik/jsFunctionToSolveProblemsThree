// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

var divideArray = function(nums) {
    //sort the array in increasing order; create 2 empty arrays, one for even indicies and one for odd indicies; check to see if these two arrays have the same elements, if they don't false, if they do...true
    let inOrder = nums.sort((a,b)=>a-b);
    
    let evens = [];
    let odds = [];
    
    for(let i=0; i<inOrder.length; i++){
        if(i%2===0){
            evens.push(inOrder[i]);
        }else{
            odds.push(inOrder[i]);
        }
    }
    
    let answers = [];
    for(let j=0; j<evens.length; j++){
        if(evens[j]!== odds[j]){
            answers.push('false')
        }else{
            answers.push('true')
        }
    }
    
    const found = answers.find(el=>el==='false');

    if(found!=undefined){
        return false
    }else{
        return true
    }
};

//given an array of integers consisting of 2*n integers
//return true if the array's integers can be split into equal pairs; return false if it cannot be split into equal pairs
//console.log(divideArray([3,2,3,2,2,2]), true);
//console.log(divideArray([1,2,3,4]), false);