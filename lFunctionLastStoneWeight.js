// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

var lastStoneWeight = function(stones) {
    //use a while loop to state that if the array has more than one element...sort decreasing value, splice the first 2 elements in the array with the difference of arr[0]-arr[1]; return the array once stones.length is 1 or less
    while(stones.length>1){
        stones.sort((a,b)=>b-a);
        let two = stones.splice(0,2,(stones[0]-stones[1]));
    }
    return stones
};

//given an array of integers that will all be of positive value
//return the last remaining number if taking the two largest values of the array, subtracting the second largest from the first largest and using the difference as a new element in the array; if the two largest are the same value, they reduce to nothing
//console.log(lastStoneWeight([2,7,4,1,8,1]), 1);
//console.log(lastStoneWeight(1), 1);