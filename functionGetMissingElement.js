// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

function getMissingElement(superImportantArray){
    //sort the array to get all of the numbers in order
    superImportantArray.sort((a,b)=>a-b);
    //create a loop to through the array
    for (let i=0; i<10; i++){
      //create a conditional to see if the index number is the same as the integer in the array
      if(i!=superImportantArray[i]){
        //return the index that is missing
        return i
      }
    }
}
  
//given an array of positive integers from 0-9 (inclusive) but one of the integers will be missing
//return the missing integer
//input([0,1,2,4,5,6,7,8,9]), output(3); input([1,2,3,4,5,6,7,8,9]), output(0)