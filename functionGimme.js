// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
    //create an array and sort the numbers in the given array
    let midNum = triplet.slice(0);
    midNum.sort((a,b)=>a-b);
    //return the index of the original array by using index 1 of midNum
    return triplet.indexOf(midNum[1])
  }
  
  //given an array of integers
  //return the index of the number that falls numerically in the middle
  //input([2,6,3]), output(3); input([46,24,209]), output(46)