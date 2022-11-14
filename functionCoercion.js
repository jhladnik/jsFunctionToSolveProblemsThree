// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b){
    //return a ternary using "==" instead of "===" to make sure we have the same variable regardless of the data type
    return a==b? true:false
 }
  
 //given two values, one will be a string and one will be a number
 //return true if the values, regardless of if they are strings or numbers, are of equal value; return
 //false if they are not of equal value regardless of the data type
 //input("2", 0), output(false); input("45", 45), output(true); input(0,"0"), output(true)