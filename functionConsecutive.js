// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

function consecutive(arr) {
    //create a conditional to find if arr.length is greater than one, if it isn't return 0, if it is sort in
    //increasing order; find the difference of the largest and smallest elements+1; subtract the arr.length
    //from this number and return
    if(arr.length<2){
      return 0;
    }else{
      arr.sort((a,b)=>a-b);
      let diff = arr[arr.length-1] - arr[0] + 1;
      return diff-arr.length;
    };
}

//given an array of integers
//return the number of integers that are needed to complete the cycle from the largest and smallest integers
//in the array
//console.log(consecutive([4,8,6]); 2);
//console.log(consecutive([1,2,3,4]); 0);
//console.log(consecutive([]); 0);
//console.log(consecutive(1); 0);