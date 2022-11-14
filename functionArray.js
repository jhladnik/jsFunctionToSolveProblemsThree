// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(arr){
    //create a conditional if length for string length over 2
    if(arr.length>=4){
    //remove all commas and replace with spaces
    let stringResult = arr.replace(/,/g,' ');
    //remove the first and last numbers from the string and return result
    return stringResult.slice(2,-2)
    }else{
      return null
    }
  }
  
  //given a string of numbers, some strings empty
  //return the string without "," and with the first and last numbers removed, and if the string has 2 integers or less, return "NULL"
  //input("1,2,3") output("2"); input("1") output(NULL); input("4,3,5,6,7,2") output("3 5 6 7")
  