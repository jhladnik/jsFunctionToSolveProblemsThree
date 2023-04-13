// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

var alternateDigitSum = function(n) {
    //separate the given number to individual integers in an array; create a variable to hold the sum; loop through the integer in the array and for every index that is even, add, and every index that is odd, subtract; return the sum
    let numStrArr = n.toString().split("");
    let numArr = numStrArr.map(el=>{
        return Number(el);
    });

    let sum = 0

    for(let i=0; i<numArr.length; i++){
        if(i%2===0){
            sum += numArr[i];
        }else{
            sum -= numArr[i];
        };
    };
    return sum
};

//given an integer
//return the sum that is the result of splitting the given integer into individual digits and alternating the digits between adding and subtracting
//console.log(alternateDigitSum(521), 4);
//console.log(alternateDigitSum(111), 1);
//console.log(alternateDigitSum(886996), 0);