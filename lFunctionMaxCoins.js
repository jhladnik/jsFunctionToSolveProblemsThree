// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with the maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins that you can have.

var maxCoins = function(piles) {
    // sort piles in decreasing order; find out what pile Bob will have which should be smallest integers of the piles; create a variable (inc) that will give us how many picks we get; create an array (bob) which will be the last inc integers of the array; create a variable that will add our coins (coins); loop through piles and if i%2 === 1, add piles[i] element to coins since this will be the second largest; return coins
    piles.sort((a,b) => b-a);

    let inc = piles.length / 3;

    let bob = piles.slice(piles.length - inc);

    let coins = 0;

    for (let i=0; i<piles.length - inc; i++) {
        if (i % 2 === 1) {
            coins += piles[i]
        }
    };

    return coins
};

// given an array of integers (piles)
// return an integer that is the sum of the second largest integer set if piles is split into triplets; meaning that the sum should be the sum of the second largest integer of each triplet
// console.log(maxCoins([2,4,1,2,7,8]), 9);
// console.log(maxCoins([2,4,5]), 4); 
// console.log(maxCoins([9,8,7,6,5,1,2,3,4]), 18);