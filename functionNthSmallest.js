// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// Input >> Output Examples
// nthSmallest({3,1,2} ,2) ==> return (2) 
// Explanation:
// Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// Explanation:
// Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

// nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
// Explanation:
// Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
// Explanation:
// Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*

function nthSmallest(arr, pos){
    //sort the array to get the numbers in order of value
    arr.sort((a,b)=>a-b);
    //return the nth smallest element
    return arr[pos-1]
}
  
//given an array of atleast 3 integers and a parameter of pos (n in this case)
//return the nth smallest integer in the array
//input([0,1,2,3],3), output(2); input([0,0,0,1,2,3], 3), output(0); input([-1,-3,-5,-9,0], 2), output(-5)