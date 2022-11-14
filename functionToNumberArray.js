// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
    //create a new array of numbers using map
    return stringarray.map(Number)
 }
  
 //given an array of stringed numbers
 //return an array of integers
 //input(['0','1','2']), output([0,1,2]); input(['0.0','2','9','6'])