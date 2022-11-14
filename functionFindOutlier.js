// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    let evens = [];
    let odds = [];
    for (let nums of integers){
      if(nums<0 && nums%(-2)===0){
        evens.push(nums);
      }else if(nums<0 && nums%(-2)===1){
        odds.push(nums);
      }else if(nums>=0 && nums%2===0){
        evens.push(nums);
      }else{
        odds.push(nums);
      }
    }
    if (odds.length>evens.length){
      return evens[0]
    }else{
      return odds[0]
    }
  }
  
  //given an array of atleast 3 integers
  //return the outlier; meaning that there will be either a single odd integer in an array of even integers, or a single even integer in an array of odd integers
  //input([1,2,4,6]), output(1); input([64,48,32,5,78]), output(5)