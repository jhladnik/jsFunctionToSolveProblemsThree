// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

function smaller(nums) {
    //create an empty array; loop through the given array; create a counter; 
    //for each element, create a slice (i+1) to the end of the array; loop over this slice using a conditional to see
    //if the counter needs to be incremented (value is less than i); push counter to empty array; return array
    let result = [];
    
    for(let i=0; i<nums.length; i++){
      let counter = 0;
      let toTheEnd = nums.slice(i+1);
      for(let j=0; j<toTheEnd.length; j++){
        if(toTheEnd[j]<nums[i]){
          counter++
        }
      };
      result.push(counter);
    };
    return result
}

//given an array of integers
//return an array of integers, the same length as the original array; each integer should be the amount of integers
//that are less in value to the right in the original array
//console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
//console.log(smaller([1, 2, 3]), [0,0,0]);
//console.log(smaller([1, 2, 0]), [1, 1, 0]);
//console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);