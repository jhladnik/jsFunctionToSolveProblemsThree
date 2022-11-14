// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

function doubleEveryOther(a) {
    //create an array to hold some stuff
    let duble = [];
    //what's a looper
    for (let i=0; i<a.length; i++){
      //conditiona is betta
      if(i%2==1){
        //push the doubled number from the odd index
        duble.push(a[i]*2);
      }else{
        //if it is an even index, push the number without doubling
        duble.push(a[i]);
      }
    }
    //return the new array
    return duble
}
  
//given an array of integers
//return an identical array except every second integer is doubled
//input([1,2,3,4]), output([1,4,3,8]); input([0]), output([]); input([-1,-2,-3,-4]), output([-1,-4,-3,-8])