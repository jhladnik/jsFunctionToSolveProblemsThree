// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    //create an array to hold the divisors
  let myVisor = [];
  //whats a looper
  for (let i=1; i<=n; i++){
    //why do we want to send a number to the array?
    if(n%i==0){
      myVisor.push(i);
    }
  }
  //return the length of the new array
  return myVisor.length
}

//given a positive integer from 1 to 500000
//return the number of divisors the given integer has
//input(7), output(2); input(10), output(4); input(12), output(6)