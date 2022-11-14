// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    //lets create our array first to hold the new values
    let zeroOne = [];
    //change the original string to lowercase and an array so we can examine each character by itself
    let arrOfS = s.toLowerCase().split("");
    //we will now create a loop to iterate through our new array
    for (let i=0; i<arrOfS.length; i++){
      //time for the conditional to see if the element is a vowel or something else
      if(arrOfS[i]=="a"||arrOfS[i]=="e"||arrOfS[i]=="i"||arrOfS[i]=="o"||arrOfS[i]=="u"){
        //send it up to the empty array
        zeroOne.push(1)
      }else{
        zeroOne.push(0)
      }
    }
    //make it a string and return
    return zeroOne.join("")
 }
  
 //given a string of characters; vowels are equal to "1" and anything else (including spaces, commas, etc.) are equal to "0"
 //return a string of the new 1's and 0's after converting the original characters
 //input("000111aA"), output("0000001"); input("    ,aAeEiIoOuU"), output("000001111111111")