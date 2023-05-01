// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

var sumOfMultiples = function(n) {
    //create an empty array; loop from 1 to and including n; use a conditional to see if the integer is divisble by our constraints, if it is, push to array; sum array and return
    let arr = [];

    for(let i=1; i<=n; i++){
        if(i%3 === 0 || i%5 === 0 || i%7 === 0){
            arr.push(i);
        };
    };

    let num = 0;

    for(let j=0; j<arr.length; j++){
        num += arr[j];
    };
    
    return num
};

//OPTIMAL TIME SOLUTION
var sumOfMultiples = function(n) {
    let sum = 0;

    for(let i = 0; i<= n ; i++){
        if(i%3 === 0 || i%5===0 || i%7===0){
            sum += i;
        };
    };
    return sum;
};

//given an integer (n)
//return the sum of all of the integers from 1 to n, inclusively, that are divisible by 3,5,or 7
//console.log(sumOfMultiples(7), 21);
//console.log(sumOfMultiples(10), 40);
//console.log(sumOfMultiples(9), 30);