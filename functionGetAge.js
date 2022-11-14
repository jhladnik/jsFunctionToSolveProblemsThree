// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    //split the string up in to separate elements in an array and join with a comma
    let stringedArray = inputString.split("");
    //return the first element in the array by using shift method and convert string in to an integer
    return parseInt(stringedArray.shift())
  }
  
  //given the string "x year(s) old", where x is an interger from 0-9
  //return what x is in an integer form
  //input("2 years old") output(2); input("1 year old") output(1)