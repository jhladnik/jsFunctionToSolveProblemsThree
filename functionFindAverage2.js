//Find the mean (average) of a list of numbers in an array.

function findAverage(nums) {
    let sumOfNums = nums.reduce((acc,c)=>acc+c,0);
    return (sumOfNums/nums.length)
  }