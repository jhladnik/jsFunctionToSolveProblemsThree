// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

var minimumSum = function(num) {
    //change the num to a string, split into 4 numbers; sort take every other number, and place them in 2
    //separate arrays ([1,3] [2,4]); join them; change to integer and add
    let strNum = num.toString().split("").sort((a,b)=>a-b);
    let first = [strNum[0],strNum[2]].join("");
    let second = [strNum[1],strNum[3]].join("");
    return parseInt(first) + parseInt(second)
};

//given a 4 digit positive integer
//return the smallest sum; to get the smallest sum, split the input into 2 separate integers but all numbers need to be used
//console.log(minimumSum(2932), 52);
//console.log(minimumSum(4009), 13);