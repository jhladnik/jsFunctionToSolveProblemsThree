// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
    //create a conditional, dependent on the second parameter
    if(toReturn=='value'){
      //if asking for the value, return smallest value
      return Math.min(...arr);
    }else{
      //if not asking for value, the index of the smallest value needs to be returned
      return arr.indexOf(Math.min(...arr));
    }
}
  
//given two parameters; the first is an array of atleast one number with no duplicates; the second parameter is a string that
//will either be 'value' or 'index'
//return the 'value' or the 'index' of the smallest value in the array(first parameter) depending on the second parameter string
//input([1,2,3,4,5,0], 'index'), output(5); input([1,2,3,4,5,0], 'value'), output(0)