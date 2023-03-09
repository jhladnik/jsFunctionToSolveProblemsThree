// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

var distributeCandies = function(candyType) {
    //create a new set of the array; if the set is greater in length than candyType.length/2, return candyType.length/2, else return set.length
    let unique = [...new Set(candyType)];
    return unique.length<=candyType.length/2 ? unique.length:candyType.length/2
};

//given an array of integers and the fact that at most, only arr/2 can be returned
//return the amount of unique integers that occur; the returned integer needs to be <=arr/2
//console.log(distributeCandies([1,1,2,2,3,3]), 3);
//console.log(distributeCandies(1,1,2,3), 2);
//console.log(distributeCandies(6,6,6,6), 1);