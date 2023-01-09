//Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    //if the greatest common divisor is not y, return x; else return the function with the inputs being y and the remainder of x/y
    //return result when both of the inputs can be divided
    if (!y){
      return x;
    }else{
      return mygcd(y, x%y);
    };
};

//given two inputs that are greater than or equal to 1
//return the greatest common divisor
//console.log(mygcd(30,12), 6);
//console.log(mycgd(8,9), 1);
//console.log(mycgd(1,1), 1);