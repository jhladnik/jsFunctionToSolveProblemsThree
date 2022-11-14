// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    //create a loop to iterate over the array
    for (let i=0; i<array.length; i++){
      //create a conditional to figure out which category the array falls into
      if(array[i]<array[i+1]){
        return "yes, ascending";
      }else if(array[0]>array[array.length-1]){
        return "yes, descending"
      }else{
        return "no"
      }
    }
}
  
//given a sorted array of integers
//return one of three strings depending on how the given array is sorted; if ascending order: "yes, ascending"; if descending order: "yes, descending"; if neither: "no"
//input([1,2,3]), output("yes, ascending"); input([3,2,1]), output("yes, descending"); input([3,5,2,3,5]), output("no")
  