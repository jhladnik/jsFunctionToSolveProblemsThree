// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array){
    //use reduce and concat to flatten the array
    let board = array.reduce((acc,val)=>acc.concat(val),[]);
    //return the variable that we just made
    return board
}
  
//given an array that contains array objects
//return the array as a flat array without using the .flat() method
//input([[1,2,3],["a","b","c"],[1,2,3]]),  output[1,2,3,"a","b","c",1,2,3]; input([[[1,2,3]]]), output([[1,2,3]])
