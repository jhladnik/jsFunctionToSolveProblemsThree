// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    //create an array to hold the integers
    let integerHolder = [];
    //create loop to push intergers into
    for(let i=0; i<=n; i++){
      integerHolder.push(i);
    }
    //create new array to hold multiples
    let multipleHolder = [];
    //create loop and conditional pushing multiples of integerHolder in to multipleHolder
    integerHolder.forEach((element)=>{
      if(element%3==0 || element%5==0){
        multipleHolder.push(element)
      }
    })
    //sum all integers in multipleHolder and return result
    return multipleHolder.reduce((acc,c)=>acc+c,0)
  }
  
  //given integer (n), and the integers 3 and 5
  //return the multiples of 3 and 5 summed togther up to and including (n)
  //input(6) output(14(3+5+6)); input(14) output(45(3+5+6+9+10+12))
