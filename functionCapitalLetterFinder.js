// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    //create an array to hold the locations of the letters
      let finalArray = []
    //create a loop to iterate through the word
    for(let i= 0;i<word.length; i++){
      //push the uppercase letters that are identified using a conditional in to the array previously made
      if(word[i]===word[i].toUpperCase()){
        finalArray.push(i)
      }
    }
    //return the array
    return finalArray
  };
  
  // given a string of mixed cased letters that make up a string
  //return an array of the locations of the uppercase letters
  //input("TkbIDnkhj") output([1,4,5]); input("HelLo WoRLd") output([1,4,7,9,10])