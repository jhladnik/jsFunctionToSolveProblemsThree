// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
    //change the value to a string, split it up into an array and change them back to integers; map through the new array of integers
    // using the pow method getting the new value; sum the new array and compare to the original value
    let arrOfVal = value.toString().split("");
    let arrOfInt = arrOfVal.map(el=>{
      return parseInt(el);
    });
    let toThePower = arrOfInt.map(em=>{
      return Math.pow(em,arrOfInt.length)
    });
    let sum = toThePower.reduce((acc,c)=>acc+c,0);
    return sum===value? true:false;
}

//given an integer
//return true if by taking the digits of the integer to the integer.length power sum to be the integer itself; false if they
//do not
//console.log(narcissistic(153), true);
//console.log(narcissistic(1652), false);