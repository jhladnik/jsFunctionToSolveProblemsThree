// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

// Note: The boy can buy the ice cream bars in any order.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// You must solve the problem by counting sort.

var maxIceCream = function(costs, coins) {
    //sort the costs in increasing order; create a counter; loop through costs; use a conditional in the loop to see if subtracting the element from coins < 0, if it is, return the counter, else, subtract element from coins; return counter after loop to cover if we have enough coins to cover all costs
    costs.sort((a,b)=>a-b);
    let bars = 0;

    for(let i=0; i<costs.length; i++){
        if(coins-costs[i]<0){
            return bars;
        }
        coins = coins-costs[i];
        bars++;
    };
    return bars;
};

//given an array (costs) of integers; given an integer (coins)
//return the max number of costs can be removed from coins
//console.log(maxIceCream([1,3,2,4,1], 7), 4);
//console.log(maxIceCream([10,6,8,7,7,8], 5), 0);
//console.log(maxIceCream([1,6,3,1,2,5], 20), 6);