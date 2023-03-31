// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

var pivotInteger = function(n) {
    //create a variable sum and initialize it at 0; create a loop from 1 to n and sum all; create a second variable sumLeft and initialize it at 0; loop from 1 to n again and subtract i from sum on each iteration, then use conditional to see if sumLeft === sum, if it is, return i, else add i to sumLeft; if nothing, return -1
    
    let sum = 0;
  
    for(let i = 1; i <= n; i++){
        sum += i;
    }
  
    let sumLeft = 0;
  
    for(let i = 1; i <= n; i++){
        sum -= i;
    
        if(sumLeft === sum){
            return i;
        }
    
        sumLeft += i;
    }
    return -1;
};

//given an integer; given the definition of a "pivot integer" being an integer in the range of 1 to n where all integers from 1 to and including pivot sum to the same sum of all integers from and including pivot to n (inclusive)
//return the pivot integer; if there is no such pivot integer, return -1
//console.log(pivotInteger(8), 6);
//console.log(pivotInteger(1), 1);
//console.log(pivotInteger(4), -1);