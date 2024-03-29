// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
    //use an if statement to see if n is 0, if so, return 1; else if n is less than 0 and greater than 12, throw a
    //RangeError; else return the factorial of n
    if(n === 0){
      return 1;
    }else if(n > 12 || n < 0){
      throw new RangeError("n is below 0 or above 12");
    }else{
      return n * factorial(n-1);
    }
}

//given an integer (n); given that if n === 0, 1 should be returned; given that the range for the problem is between
//and including 0 and 12
//return 1 if n === 0; return a RangeError if n is above 12 or below 0; or return the factorial of n
//console.log(factorial(0), 1);
//console.log(factorial(1), 1);
//console.log(factorial(2), 2);
//console.log(factorial(5), 120);