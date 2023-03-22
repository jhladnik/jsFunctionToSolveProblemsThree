// Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

// The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.

// Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.

// Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.

var stoneGame = function(piles) {
    //this should always return true because there will always be an odd amount of stones, each player is to play optimally, and they have the choice to choose from the front or the back of the array
    return true
};

//given an array of integers; given "Alice" always goes first and can choose from the front or the back of the array; given the statement that the two players will play optimally (meaning they can count); the array sum will always be odd
//return true if "Alice" wins, else return false
//console.log(stoneGame([5,3,4,5]), true);
//console.log(stoneGame([3,7,2,3]), true);
//console.log(stoneGame([2,4,5,2]), true);