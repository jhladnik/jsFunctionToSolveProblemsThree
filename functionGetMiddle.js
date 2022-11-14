// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s){
    //create a variable for the position
    let place;
    //create a variable for the length of the string to return
    let strLen;
    //create a conditional that tells us whether the word is odd or even
    if(s.length%2 == 1){
      //define place
      place = s.length/2;
      //define strLen
      strLen = 1;
      
    }else{
      //define place
      place = s.length/2-1;
      //define strLen
      strLen = 2;
      }
    //return the middle two letters or letter depending on the conditional above
    return s.substring(place,place+strLen)
  }
  
  //given a one word string
  //return the middle letter if the letter count on the word is odd, return the two middle characters if the letter count is even
  //input("testing") output("t"); input("test") output("es"); input("hladnik") output("d")