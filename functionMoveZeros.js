// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    //return arr filtered without 0 then concatenate arr filtered specifically for 0 to the end of arr
   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }
  
  //given an array of random elements (strings,booleans,integers)
  //return the array with all of the 0's removed from their places and placed at the end of the array
  //input([true,"a",0,0,2,0,3,5,7,3]) output([true,"a",2,3,5,7,3,0,0,0]); input(['t',0,2,8,'w',5,7,2]) output(['t',2,8,'w',5,7,2,0])