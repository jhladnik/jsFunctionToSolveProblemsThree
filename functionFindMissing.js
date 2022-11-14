// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.

function findMissing(arr1, arr2) {
    //sort the arrays given to get all of the numbers in value order
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    //create a loop to iterate over arr2 elements
    for (let nums of arr2){
      //if the first element in arr1 is equal to nums, remove the first element of arr1
      if(arr1[0]==nums){
        arr1.shift(arr1[0])
      }
    }
    //we should be either left with an array starting with the missing value of arr2, isolate it, make the array a number only, and return it
    return Number(arr1[0])
}
  
//given two arrays; the second array is a shuffled version of the first but the second has one element missing
//return the element that is missing from the second array
//input([1,2,3,4,5], [1,3,4,5]), output(2); input([0,0,0,0,0,0], [0,0,0,0,0]), output(0); input([1],[]), output(1)