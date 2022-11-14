// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    //create a new array to store the sorted odds
    let arrayOfOdd = array.filter((x)=>x%2).sort((a,b)=>a-b);
    //create a ternary where we push i if the number in the array is odd, but if it isn't we will keep the element in the same position
    return array.map((x) => x % 2 ? arrayOfOdd.shift() : x);
  }
  
  
  //given an array of odd and even numbers
  //return the array with the odd numbers in ascending order while leaving the even numbers in their original positions
  //input([2,4,7,5,3]) output([2,4,3,5,7])