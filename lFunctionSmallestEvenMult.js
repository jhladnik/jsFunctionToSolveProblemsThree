// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

var smallestEvenMultiple = function(n) {
    //if the given integer is a multple of 2, return the integer, else the smallest
    //common integer will be 2n
    if(n%2===0){
        return n;
    }else{
        return n*2
    }
};

//given a positive integer and the number 2
//return the smallest multiple of both the given integer and the number 2 that is in common
//input(5), output(10);
//input(6), output(6)