// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

const closestMultiple10 = num => {
    //find the lower multiple of 10 that is lower than num
    let lowMult = Math.floor(num/10)*10;
    //find the higher multiple of 10 that is higher than num
    let highMult = Math.ceil(num/10)*10;
    //create a conditional telling us whether the lower or higher multiple should be returned depending on nums proximity to them
    if((highMult-num)>(num-lowMult)){
      return lowMult;
    }else if(num%10==0){
      return num;
    }else{
      return highMult;
    }
};
  
//given a number
//return the closest multiple of 10
//input(56), output(60); input(73), output(70); input(50), output(50)