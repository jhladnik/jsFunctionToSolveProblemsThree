// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
    //check if the array has the specific value
    if(a.indexOf(x)==-1){
      //-1 means that x does not exist as an element
      return false
    }else{
      return true
    }
};
  
//given an array (a) and a value (x); the array can contain numbers or strings and the value can be either
//return true if the array contains the value; return false if the array does not contain the value
//input([1,2,3,4], 3), output(true); input(["hello",0,"1"], "it"), output(false)