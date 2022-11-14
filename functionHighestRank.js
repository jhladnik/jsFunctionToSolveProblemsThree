// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    //sort the array so that all of the repeating elements are stacked at the end of the array
      arr.sort((a,b)=>
        arr.filter(v=>v===a).length - arr.filter(v=>v===b).length).pop();
      //return the last element of the array as it will be the element with the most frequency and largest
      return arr.pop()
}
    
//given an array with at least one number in it
//return the element that occurs the most in the array; if there is a tie for frequency,
//return the element with the larger value
//input([1,1,2,2,2,3,4,5,6,7]), output(2); input([111,1,22,2,2]), output(2)