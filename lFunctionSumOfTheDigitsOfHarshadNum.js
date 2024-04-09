// An integer divisible by the sum of its digits is called Harshad number. You are given a number x. Return the sum of the digits of x if x is a Harshad number else return -1.


var sumOfTheDigitsOfHarshadNumber = function(x) {
    // need to make the integer a string, split it into an array of integers as strings
    let arrOfStrX = x.toString().split("");

    // map through the array and change the strings into integers
    let arrOfInt = arrOfStrX.map(el => {
        return parseInt(el)
    });

    // create variable for the sum
    let sum = 0


    // loop through arrOfInt
    for (let i=0; i<arrOfInt.length; i++) {
        sum += arrOfInt[i]
    };

    return x%sum === 0 ? sum:-1

};


// given an integer (x)
// return the sum of the digits of x if x is divisible by the sum of its digits (a Harshad number); else return -1
// console.log(sumOfTheDigitsOfHarshadNumber(18); 9);
// console.log(sumOfTheDigitsOfHarshadNumber(23); -1);
// console.log(sumOfTheDigitsOfHarshadNumber(0); 0);