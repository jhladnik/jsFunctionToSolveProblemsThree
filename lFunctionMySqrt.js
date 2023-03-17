// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

var mySqrt = function(x) {
    //create an empty array and fill with 0 to x; binary search with prod=mid*mid
    let xArr = [];
    for(let i=0; i<x; i++){
        xArr.push(x[i])
    }
    let left = 0;
    let right = xArr.length-1;
    

    while(left<right){
        let mid = left+Math.floor((right-left+1)/2);
        let prod = mid*mid
        if(prod>x){
            right = mid-1
        }else{
            left = mid
        }
    }
    return left
};

//given an integer
//return the square root of the given without using the built in methods rounded down to the nearest whole number
//console.log(mySqrt(4), 2);
//console.log(mySqrt(8), 2);