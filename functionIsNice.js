// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.


function isNice(arr){
    //loop through the array; use a conditional to see if the element has a +1 or -1 exisiting; if it doesn't
    //return throw false right away
    if(arr.length>1){
      for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]-1)===-1 && arr.indexOf(arr[i]+1)===-1){
          return false;
        }
      };
      return true
    }
    return false
};

//given an array of integers and the definition of a "Nice array" being all of the elements having element+1 ||
//element-1 in the array
//return true if the array is a "Nice array"; return false if it is not
//console.log(isNice([2,10,9,3]), true);
//console.log(isNice([3,4,5,7]), false);