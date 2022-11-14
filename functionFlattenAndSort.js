// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

"use strict";

function flattenAndSort(array) {
  //create a new array to hold all of the integers from array
  let entireList = [];
  //create a loop to push all integers in to the new array
  for (let arrs of array){
    entireList.push(...arrs);
  }
  //return the new array sorting by value ascending
  return entireList.sort((a,b)=>a-b)
}

//given a two-dimensional array full of integers
//return all values in a single array that is sorted by value ascending
//input([1,2,3],[4,5,6,7,8],[9,10,11,12,13]), output([1,2,3,4,5,6,7,8,9,10,11,12,13])