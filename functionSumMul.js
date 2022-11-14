// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    if(n<=0||m<=0){
      return 'INVALID';
      }else{
    //need an array to hold all of the multiples
    let mult = [];
    //loop through the numbers to find the mulitples
    for (let i=n; i<m; i++){
      if(i%n===0){
        mult.push(i)
      }
    }
    //find the sum of the new array
    let sum = mult.reduce((acc,c)=>acc+c,0);
    return sum
    }
  }

//given a mulitple and a limit integer
//return the sum of any multiples found from 0 to but not including limit; if limit or multiple are less than 0, return 'INVALID'
//input(2,10), output(20); input(0,0), output('INVALID')
