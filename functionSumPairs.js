// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

function sumPairs(ints, s) {
    //create an empty array; loop through ints; on each iteration, create a new array/slice from i+1; loop over the slice, use a conditional to see if the two iterators sum to s, if so,  push to holder array; use a condtional to see if the holder array has a length of >= 1, if so, sort by the ints.lastIndexOf(el[1]) which will be the index of the last occurrence of the second element (takes into account doubles, i.e. 2+2, 5+5, etc. ) and return the 0th element; else return undefined since there will be nothing in the holder array
    let holder = [];
    for(let i=0; i<ints.length; i++){
      let cut = ints.slice(i+1);
      
      for(let j=0; j<cut.length; j++){
        if(ints[i]+cut[j]===s){
          holder.push([ints[i],cut[j]]);
        }
      };
    };
    if(holder.length>=1){
      return holder.sort((a,b)=>{
        return ints.lastIndexOf(a[1])-ints.lastIndexOf(b[1])
      })[0];
    }
    return undefined
}