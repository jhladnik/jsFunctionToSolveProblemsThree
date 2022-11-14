// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    //create an array to hold some new values
    let arrOfUni = [];
    //create a loop to iterate over the numbers given
    for(let nums of a){
      //we need to find the decimals that correspond to the vowels
      if(nums == 97 || nums == 101 || nums == 105 || nums == 111 || nums == 117){
      //if we do find them, push the vowel to the new array
      arrOfUni.push(String.fromCharCode(nums)); 
      }else{
        //otherwise, send the number that we are given with the original array
        arrOfUni.push(nums)
      }
    }
    //return the new array after it is all full of our findings
    return arrOfUni
}
  
//given an array of numbers
//return an array; if any of the numbers given in the array are character codes for lowercase vowels (a,e,i,o,u),
// that element needs to be changed to the vowel that it corresponds with