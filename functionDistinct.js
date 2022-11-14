// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same

function distinct(a) {
    //create new array and use the ... operator and new Set to remove duplicates
    let newArray = [...new Set(a)];
    //return the new array
    return newArray
  }
  
  //given an array of numbers, some repeating, some not
  //return a new array containing any number duplicates that have been removed from the original array
  //input([1,1,3,2,6,3,6]) output([1,3,6]); input([4,6,2,9,3,4,6,9]) output([4,6,9])