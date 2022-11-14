// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
    //change the integer to a string and return the length
    return n.toString().length
}
  
//given an integer that is greater than or equal to 0
//return the number of digits that the integer contains
//input(0), output(1); input(1234567890), output(10); input(111), output(3)