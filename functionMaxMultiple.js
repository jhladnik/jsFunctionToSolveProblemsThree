// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .

function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }
  
  //given a divisor and a bound, both positive
  //return the largest number that is divisible by the divisor and is less than or equal to the bound, but greater than zero
  //input(2,7) output(6); input(37,200) output(185)