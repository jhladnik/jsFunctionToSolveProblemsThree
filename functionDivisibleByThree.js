// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

function divisibleByThree(str){
    //create an array of the string
    let arrOfStr = str.split("");
    //change all of the elements into numbers
    let globe = arrOfStr.map(Number)
    //find the sum of the new array
    let sumOfArr = globe.reduce((acc,c)=>acc+c,0);
    //ternary wutttt
    return sumOfArr%3==0 ? true:false
 }
  
 //given a sting of numbers
 //return true if the number represented by the string is divisible by 3; return false if the 
 //number represented by the string is not divisible by 3
 //input("3589"), output(false); input("17892"), output(true); input("0"), output(true)