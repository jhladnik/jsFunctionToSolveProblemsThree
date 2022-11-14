// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

function explode(s) {
    //change the string to an array
    let arrOfS = s.split("");
    //create an empty array to hold som stuffs
    let repeter = [];
    //lets loop over the new array
    for (let nums of arrOfS){
      repeter.push(nums.repeat(nums));
    }
    //return the array....but change it to a string please
    return repeter.join("")
}
  
//given a string of numbers from 0-9
//return a string where the number is repeated the number of times that the number is
//input("0001"), output("1"); input("1234"), output("1223334444"); input("91"), output("9999999991")