// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n,xs){
    // sort the array
  xs.sort((a,b)=>b-a);
  //create a conditional to see if we need to return anything at all
  if(n===0){
    return [];
  }else{
    //use slice to create a new array of the largest integers
    let topNums = xs.slice(0,n);
    //return the new array after sorting it
    return topNums.sort((a,b)=>a-b)
  }
}

//given an array of integers in no particular order
//return the largest n elements in a new array
//input(2,[1,2,3,4,5,6,7,9]), output([7,9]); input(0,[0,0,0,0,0,9]), output([])