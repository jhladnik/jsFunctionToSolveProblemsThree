// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
 

// Task
// We need a function to collect these numbers, that may receive two integers a,b that defines the range [a,b](inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above

function sumDigPow(a, b) {
  //create an empty array (eureka); loop from a to and including b; in the loop, every iteration perform the following:
  //if the integer is less than 10, push to eureka, else, change the integer to a string, split it, map through the new array
  // changing the elements back to integers; add each of the new integers together after bringing them to the power of their place+1;
  //if the sum is equal to i, push to eureka; return eureka
  
  const eureka = [];
  
  for(let i=a; i<=b; i++){
    if(i<10){
      eureka.push(i);
    }else{
      let strArr = i.toString().split("");
      let digits = strArr.map(el=>{
        return Number(el);
      });
      let sum = 0;
      for(let j=0; j<digits.length; j++){
        sum += Math.pow(digits[j], j+1);
      };
      if(sum === i){
        eureka.push(i);
      }
    };
  };
  return eureka
}

//given two integers (a) and (b); a and b provide a range that is inclusive
//return an array of integers in the range provided that when broken up by digit, the digits to the power of their
//place in the integer, added together equal the integer
//console.log(sumDigPow(1,10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//console.log(sumDigPow(1,100), 1, 2, 3, 4, 5, 6, 7, 8, 9, 89);
//console.log(sumDigPow(90,100), []);