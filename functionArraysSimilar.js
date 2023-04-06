// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

function arraysSimilar(arr1, arr2) {
    //test to see if the arrays have the same length; if not, throw false, if they do, sort by increasing value,
    //loop through one of the arrays and see if the elements are the same between the two, if not, throw false,
    //if nothing catches, true
    if(arr1.length!==arr2.length){
      return false;
    }else{
      arr1.sort((a,b)=>a-b);
      arr2.sort((a,b)=>a-b);
      
      for(let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
          return false;
        };
      };
      return true;
    };
}

//given two arrays that can be mixed with strings and integers; not necessarily the same length
//return true if the arrays are similar, meaning they have the same elements (does not have to be in the 
//same order) and have the same length; return false if otherwise
//console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3]), true);
//console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, "4"]), false);