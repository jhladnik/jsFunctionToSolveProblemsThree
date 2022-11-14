// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    return str.replace(/[^a-z]/gi,'').split('').reverse().join('')
  }
  
  //given a string of letters and/or random characters
  //return the string reversed with only the letters, all other characters should be omitted
  //input("you24ths"), output("shtuoy"); input("e3e4r7t"), output("tree")