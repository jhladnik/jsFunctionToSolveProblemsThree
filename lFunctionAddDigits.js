// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.


var addDigits = function(num) {
    // change num into an array of strings
    let str = num.toString().split("");

    // use a while loop to get down to num being one digit
    while (num > 9) {
        // change the array of strings into an array of integers
        let toNums = str.map(el => {
            return Number(el);
        });
        // sum the array and assign the value to num
        let num = toNums.reduce((acc,c) => acc+c, 0);
        // call the function again until while is falsy
        return addDigits(num)
    }
    // return num
    return num
};

// given an integer (num)
// return the result of summing the digits of num until num is only one digit
// console.log(addDigits(38); 2);
// console.log(addDigits(0); 0);