// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
    //if the two arrays are the same length, return 0
    if(arr.length-mixArr.length===0){
      return 0
    }else{
      //sort the mixed array
      mixArr.sort((a,b)=>a-b);
      //loop over the sorted array now
      for (let i=0; i<mixArr.length; i++){
        //conditional to see where we are missing something, if the first element
        //is not 1, or the original array is empty, return 1
        if(mixArr[0]!=1 || arr.length==undefined){
          return 1
          //else we need to return the element that is not consecutive
        }else if(mixArr[i]+1!=mixArr[i+1]){
          return mixArr[i]+1
        }
      }
    }
  }
  