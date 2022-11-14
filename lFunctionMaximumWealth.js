// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    //run the reduce method over every element in the array and return the largest new element
    let richest = accounts.map(function(el){
        return el.reduce((a,c)=>a+c)
    });
    return Math.max(...richest)
};

//given an array of subarrays full of positive integers
//return the largest sum of the subarrays
//input([1,2,3],[3,2,1]), output(6);
//input([1,5],[7,3],[3,5]), output(10);
//input([2,8,7].[7,1,3],[1,9,5]), output(17)