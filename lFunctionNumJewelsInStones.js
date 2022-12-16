// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
    //change strings to arrays; initialize counter; loop through the arrays finding the similar elements and increment the counter; return counter
    let arrOfJ = jewels.split("");
    let arrOfS = stones.split("");
    let count = 0
    for (let i=0; i<=arrOfS.length; i++){
        for (let j=0; j<arrOfJ.length; j++){
            if (stones[i]==arrOfJ[j]){
                count = count+1
            }
        }
    }
    return count
};

//given 2 separate strings of letters labeled as jewels and stones; strings are case-sensitive
//return how many stones match the jewels
//input(jewels="aA", stones="aAAbbbb"), output(3)
//input(jewels="z", stones = "ZZ"), output(0)