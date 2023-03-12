// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

function all( arr, fun ){
    //create a loop through arr with a conditional for the false representation of the boolean; else true
    for(let i=0; i<arr.length; i++){
      if(!fun(arr[i])){
        return false;
      }
    };
    return true;
};

//given an array of integers and a function
//return true if all of the elements in the array create a true statement for the function; else return false
//console.log(all([1,2,3,4,5], function(v){return v<9}), true);
//console.log(all([1,2,3,4,5], function(v){return v>9}), false);