// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// //>>>>> 7
// The input will always be an array.

function deepCount(a){
    //
    const countIt = (a=[])=>{
      return a
        .reduce((acc,val)=>{
          return acc+ (Array.isArray(val)? countIt(val):0);
      }, a.length);
    }
    return countIt(a)
}
  
//given an array possibly containing nested arrays
//return the number of elements that the array contains
//input([1,2,3,[4,[5]]]), output(5); input([[[[[[[[]]]]]]]]), output(7)