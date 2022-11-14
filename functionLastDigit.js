// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
// b
//  . Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^79 
// 7
//   is 999, since 97=47829699^7 = 47829699 
// 7
//  =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
// 200
//  ) 
// 2 
// 300
 
//  , which has over 109210^{92}10 
// 92
//   decimal digits, is 666. Also, please take 000^00 
// 0
//   to be 111.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0

var lastDigit = function(str1, str2){  
    // if exponent is 0, return 1
      
      if (parseInt(str2) === 0) return 1;
      
      // otherwise...
      // 0 always returns 0
      // 1 always returns 1
      // 2 rotates between 2, 4, 8, 6....
      // 3 rotates between 3, 9, 7, 1....
      // 4 rotates between 4, 6....
      // 5 always returns 5
      // 6 always returns 6
      // 7 rotates between 7, 9, 3, 1....
      // 8 rotates between 8, 4, 2, 6....
      // 9 rotates between 9, 1....
      
      // because we only need the final digit of str1 to determine the result, let's capture it
      let base = parseInt(str1.slice(-1)) % 10;
      // at worst, the result of any ending digit rotates through four cases, we need two digits here because 111%4 === 11%4 != 1%4
      let exp = parseInt(str2.slice(-2)) % 4;
      if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.
    
    
      // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
      //
      
      return Math.pow(base, exp) % 10;
}
    
//given 2 strings (both are numeric values)
//return the last digit of the number that would be the result if str1 had the power of str2 applied to it;
//if the two strings are both 0, return 1
//input("0","0"), output(1); input("3","2"), output(9); input("10","10"), output(0)
