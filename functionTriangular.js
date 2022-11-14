// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

function triangular( n ) {
    //create an array to hold some values that we will produce
    let allSeeing = [];
    //give me a conditional to return 0 if someone is trying to pull a fast one
    if(n <= 0){
      return 0;
    }else{
      //feeling a little loopy here
      for (let i=1; i<=n; i++){
        //full send
        allSeeing.push(i);
      }
    }
    //get some sum
    let eye = allSeeing.reduce((acc,c)=>acc+c, 0);
    //return it
    return eye
}
  
//given the input of a triangular number; 0 needs to be returned for any numbers that are out of range
//return the 0 if the number is out of range; return the nth triangular number from the degree that we are given
//input(-62), output(0); input(2), output(3); input(6), output(21)
  
