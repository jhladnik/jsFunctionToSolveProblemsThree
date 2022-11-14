// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
    //change the input to a string
    let strN = n.toString();
    //if the input is less than 3 in length, return the input since it will not need a comma
    if(strN.length<=3){
      return strN
    }else{
      //return the original number and use toLocaleString method
      return n.toLocaleString()
    }
}
  
//given a string of numbers as the input of n
//return the string with commas after every set of three digits, grouping them in decimal representation
//input(100), output('100'); input(1000), output('1,000'); input(345678), output('345,678')