// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

var multiply = function(num1, num2) {
    // If either number is 0, return "0" since anything multiplied by 0 is 0.
    if (num1 === "0" || num2 === "0") return "0";

    // Get the length of both numbers.
    let len1 = num1.length, len2 = num2.length;
    // Initialize an array to hold the results of multiplication, filled with 0s.
    // The maximum possible length of the result is len1 + len2.
    let result = new Array(len1 + len2).fill(0);

    // Loop backwards through the first number.
    for (let i = len1 - 1; i >= 0; i--) {
        // Loop backwards through the second number.
        for (let j = len2 - 1; j >= 0; j--) {
            // Multiply the current digits of num1 and num2.
            let mul = (num1[i] - '0') * (num2[j] - '0');
            // Add the product to the existing number in the result array at position i+j+1.
            let sum = mul + result[i + j + 1];

            // Set the current position in the result array to the units digit of the sum.
            result[i + j + 1] = sum % 10;
            // Carry over the tens digit to the next position in the result array.
            result[i + j] += Math.floor(sum / 10);
        }
    }

    // The first digit might be 0 (e.g., when multiplying "2" and "3", the array starts with [0, 6]).
    // If so, remove this leading zero.
    if (result[0] === 0) {
        result.shift();
    }

    // Join the array into a string and return it.
    return result.join('');
};

// given a non-negative integer as a string (num1) and given another non-negative integer
// as a string (num2)
// return a string that represents the product of num1 and num2 if they were integers without using
// parseInt() or Number()
// console.log(multiply("123", "456"); "56088");
// console.log(multiply("0", "0"); "0");
// console.log(multiply("2", "3"); "6");