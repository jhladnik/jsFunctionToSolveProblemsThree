// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

function pairs(ar){
    //we need a counter
    let count = 0;
    //loop for every other number
    for (let i = 0; i < ar.length; i += 2)
      //if the absolute difference in the value of the our element and the next in line is 1, we need to add
      //to the counter
      if (Math.abs(ar[i] - ar[i + 1]) === 1)
        count += 1;
    //return our counter
    return count;
};
  
//given an array of integers; both positive and negative
//return how many consecutive pairs are existing in the array; a consecutive pair is defined as
//numbers that are adjoining to eachother in the array and are +1 or -1 from the adjacent number.
//input([1,2,5,7,13,16,14,13]), output(2)