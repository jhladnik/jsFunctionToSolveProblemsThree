// You are given positive integers n and m.

// Define two integers, num1 and num2, as follows:

// num1: The sum of all integers in the range [1, n] that are not divisible by m.
// num2: The sum of all integers in the range [1, n] that are divisible by m.
// Return the integer num1 - num2.

var differenceOfSums = function(n, m) {
    // create an array to hold integers from 1 to n
    let arr = [];

    // loop from 1 to n and push to arr
    for (let i=1; i<=n; i++) {
        arr.push(i);
    }

    // filter arr for integers not divisible by m
    let not = arr.filter(el => el%m !== 0);

    // sum it
    let num1 = not.reduce((acc,c) => acc+c, 0);

    // filter arr for divisible
    let divisible = arr.filter(em => em%m === 0);

    // sum it
    let num2 = divisible.reduce((acc,c) => acc+c, 0);

    return num1-num2
};

// given two integers (n) and (m)
// return the difference of num1-num2 where num1 is the sum of all integers from 1 to n
// that are not divisible by m and num2 is the sum of all integers from 1 to n that are divisible
// by m
// console.log(differenceOfSums(10,3); 19);
// console.log(differenceOfSums(5,6); 15);
// console.log(differenceOfSums(5,1); -15);