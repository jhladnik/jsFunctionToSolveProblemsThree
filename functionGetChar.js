// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

function getChar(c){
    //return string of ASCII char from (c) using the fromCharCode() method
    return String.fromCharCode(c)
}
  
//given a number (c)
//return the corresponding ASCII char for the value (c) given
//input(63) output("?"); input(85) output("U"); input(111) output("o")